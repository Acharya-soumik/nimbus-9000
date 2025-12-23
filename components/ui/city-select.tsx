"use client"

import * as React from "react"
import { Search, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface CitySelectProps {
  options: { value: string; label: string }[]
  value?: string
  onValueChange: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  className?: string
  error?: boolean
}

export function CitySelect({
  options,
  value,
  onValueChange,
  placeholder = "Search your city",
  searchPlaceholder = "Search cities...",
  emptyMessage = "No cities found",
  className,
  error = false,
}: CitySelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const selectedOption = value
    ? options.find((option) => option.value === value)
    : null

  // Filter options based on search
  const filteredOptions = React.useMemo(() => {
    if (!searchValue) return options

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    )

    // If no matches found and "Others" option exists, show it as a fallback
    if (filtered.length === 0) {
      const othersOption = options.find((opt) => opt.value === "Others")
      if (othersOption) {
        return [othersOption]
      }
    }

    return filtered
  }, [options, searchValue])

  // Auto-focus search input when dropdown opens
  React.useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 0)
    }
  }, [isOpen])

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setSearchValue("")
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (option: { value: string; label: string }) => {
    onValueChange(option.value)
    setIsOpen(false)
    setSearchValue("")
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onValueChange("")
    setSearchValue("")
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-12 w-full items-center justify-between rounded-xl border bg-gray-50/50 px-4 py-3.5 text-left text-base transition-all",
          "hover:bg-white focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20",
          error ? "border-red-500" : "border-gray-200",
          !selectedOption && "text-gray-400",
          className
        )}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center gap-2">
          {selectedOption && (
            <X
              className="h-4 w-4 text-gray-400 hover:text-gray-600"
              onClick={handleClear}
            />
          )}
          <ChevronDown
            className={cn(
              "h-4 w-4 text-gray-400 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full z-[100000] mt-2 max-h-[280px] overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="border-b border-gray-200 bg-gray-50 p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsOpen(false)
                    setSearchValue("")
                  }
                }}
                className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-9 pr-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-[200px] overflow-y-auto overscroll-contain">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-center text-sm text-gray-500">
                {emptyMessage}
              </div>
            ) : (
              <>
                {filteredOptions.length === 1 &&
                  filteredOptions[0].value === "Others" &&
                  searchValue && (
                    <div className="border-b border-gray-200 bg-yellow-50 px-4 py-2 text-xs text-gray-600">
                      No cities found. Select "Others" to enter manually.
                    </div>
                  )}
                {filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={cn(
                      "flex min-h-[48px] w-full cursor-pointer items-center px-4 py-3 text-left text-base transition-colors",
                      "hover:bg-primary/10 active:bg-primary/20",
                      selectedOption?.value === option.value &&
                        "bg-primary/20 font-semibold"
                    )}
                  >
                    <span className="truncate">{option.label}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
