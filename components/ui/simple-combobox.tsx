"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { Check, ChevronsUpDown, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SimpleComboboxProps {
  options: { value: string; label: string }[]
  value?: string
  onValueChange: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  className?: string
}

export function SimpleCombobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  disabled = false,
  className,
}: SimpleComboboxProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [selectedOption, setSelectedOption] = React.useState<{ value: string; label: string } | null>(
    value ? options.find(option => option.value === value) || null : null
  )
  const [dropdownStyle, setDropdownStyle] = React.useState<React.CSSProperties>({})

  const containerRef = React.useRef<HTMLDivElement>(null)
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Filter options based on search
  const filteredOptions = React.useMemo(() => {
    if (!searchValue) return options
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    )
    
    // If no results found and "Others" option exists in original options,
    // show "Others" as a fallback option
    if (filtered.length === 0 && searchValue) {
      const othersOption = options.find(opt => opt.value === "Others")
      if (othersOption) {
        return [othersOption]
      }
    }
    
    return filtered
  }, [options, searchValue])

  // Update selected option when value prop changes
  React.useEffect(() => {
    if (value) {
      const option = options.find(opt => opt.value === value)
      setSelectedOption(option || null)
    } else {
      setSelectedOption(null)
    }
  }, [value, options])

  const updatePosition = React.useCallback(() => {
    if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        const dropdownHeight = 350; // max height of dropdown

        // Determine if dropdown should open upward or downward
        const openUpward = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

        setDropdownStyle({
            position: 'fixed',
            ...(openUpward
                ? { bottom: `${viewportHeight - rect.top + 4}px` }
                : { top: `${rect.bottom + 4}px` }
            ),
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            zIndex: 999999, // Extremely high z-index
            pointerEvents: 'auto',
        });
    }
  }, []);

  const handleSelect = (option: { value: string; label: string }) => {
    setSelectedOption(option)
    onValueChange(option.value)
    setIsOpen(false)
    setSearchValue("")
  }

  const handleClear = () => {
    setSelectedOption(null)
    onValueChange("")
    setSearchValue("")
  }

  const handleToggle = () => {
    if (disabled) return
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      updatePosition();
      // Focus search input when opening - use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (searchInputRef.current) {
            searchInputRef.current.focus();
            searchInputRef.current.click(); // Ensure it's truly focused
          }
        });
      });
    }
  }

  // Update position on scroll or resize
  React.useEffect(() => {
      if (isOpen) {
          const handleScrollOrResize = () => {
              updatePosition();
          };
          
          window.addEventListener('scroll', handleScrollOrResize, true);
          window.addEventListener('resize', handleScrollOrResize);
          
          return () => {
              window.removeEventListener('scroll', handleScrollOrResize, true);
              window.removeEventListener('resize', handleScrollOrResize);
          };
      }
  }, [isOpen, updatePosition]);


  // Focus input when dropdown opens
  React.useEffect(() => {
    if (isOpen && searchInputRef.current) {
      const focusInput = () => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      };

      // Try multiple times to ensure focus
      const timer1 = setTimeout(focusInput, 50);
      const timer2 = setTimeout(focusInput, 100);
      const timer3 = setTimeout(focusInput, 200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is inside container or inside dropdown portal
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false)
        setSearchValue("")
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setSearchValue("")
    }
  }

  const dropdownContent = (
    <div
        ref={dropdownRef}
        style={{
          ...dropdownStyle,
          pointerEvents: 'auto', // Ensure clicks work
        }}
        className="bg-white border-2 border-gray-300 rounded-xl shadow-2xl overflow-hidden"
        data-combobox-dropdown="true"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
    >
      {/* Search Input */}
      <div className="p-3 border-b border-gray-200 bg-gray-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => {
              e.stopPropagation();
              setSearchValue(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            className="pl-9 h-10 text-base border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 w-full"
            style={{ pointerEvents: 'auto' }}
          />
        </div>
      </div>

      {/* Options List */}
      <div
        className="overflow-y-auto max-h-[280px] overscroll-contain"
        style={{
          pointerEvents: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {filteredOptions.length === 0 ? (
          <div className="p-4 text-center text-sm text-muted-foreground">
            {emptyMessage}
          </div>
        ) : (
          <div className="py-1">
            {filteredOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={cn(
                  "w-full text-left px-4 py-3 text-base hover:bg-primary/10 focus:bg-primary/10 focus:outline-none min-h-[48px] flex items-center transition-colors cursor-pointer",
                  selectedOption?.value === option.value ? "bg-primary/20 font-semibold" : "hover:bg-gray-100"
                )}
                style={{ pointerEvents: 'auto' }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleSelect(option);
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleSelect(option);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedOption?.value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <span className="truncate">{option.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative w-full" data-combobox-container="true">
      {/* Trigger Button */}
      <Button
        type="button"
        variant="outline"
        onClick={handleToggle}
        disabled={disabled}
        data-combobox-trigger="true"
        className={cn(
          "w-full justify-between h-10 px-3 py-2 text-left font-normal",
          !selectedOption && "text-muted-foreground",
          className
        )}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center gap-1">
          {selectedOption && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-transparent"
              onClick={(e) => {
                e.stopPropagation()
                handleClear()
              }}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </div>
      </Button>

      {/* Portal Dropdown */}
      {isOpen && createPortal(dropdownContent, document.body)}
    </div>
  )
}
