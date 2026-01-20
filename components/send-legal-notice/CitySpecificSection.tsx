'use client';

import { CityData } from "@/lib/data/cities";
import { NoticeTypeData } from "@/lib/send-legal-notice/notice-types/types";
import { MapPin, Scale, Users, Clock, Check } from "lucide-react";
import Link from "next/link";
import { getNoticeData } from "@/lib/send-legal-notice/notice-types-data";

interface CitySpecificSectionProps {
  cityData: CityData;
  noticeType: NoticeTypeData;
}

export function CitySpecificSection({ cityData }: CitySpecificSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl">
        {/* City Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{cityData.stats.noticesSent}+</div>
            <div className="text-sm text-muted-foreground">Notices Sent in {cityData.name}</div>
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{cityData.stats.lawyersAvailable}+</div>
            <div className="text-sm text-muted-foreground">Local Advocates Available</div>
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{cityData.stats.avgResponseTime}</div>
            <div className="text-sm text-muted-foreground">Average Delivery Time</div>
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Court Compliant</div>
          </div>
        </div>

        {/* Why Choose VakilTech in [City] */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose VakilTech for Legal Notice in {cityData.name}?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-primary p-1" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Local Court Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Our advocates are familiar with {cityData.courts.highCourt} and {cityData.name} district
                  court procedures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-primary p-1" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Same-Day Drafting</h3>
                <p className="text-sm text-muted-foreground">
                  Most notices in {cityData.name} are delivered within 24 hours of order.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-primary p-1" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{cityData.state}-Specific Laws</h3>
                <p className="text-sm text-muted-foreground">
                  Notices comply with {cityData.state} state laws and {cityData.courts.highCourt} precedents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
               <Check className="w-6 h-6 text-primary p-1" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Local Language Support</h3>
                <p className="text-sm text-muted-foreground">
                  Notices can be drafted in English and translated if needed for local courts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Legal Resources - Added to prevent thin content */}
        {cityData.localInfo && (
          <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Local Legal Resources in {cityData.name}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {cityData.localInfo.legalAidCenters && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4" /> Legal Aid Centers
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    {cityData.localInfo.legalAidCenters.map((center, i) => (
                      <li key={i}>{center}</li>
                    ))}
                  </ul>
                </div>
              )}

              {cityData.localInfo.consumerForums && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Consumer Forums
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    {cityData.localInfo.consumerForums.map((forum, i) => (
                      <li key={i}>{forum}</li>
                    ))}
                  </ul>
                </div>
              )}

              {cityData.localInfo.barAssociation && (
                <div>
                   <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Bar Association
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cityData.localInfo.barAssociation}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Popular Notice Types in this City */}
        {cityData.popularNoticeTypes && cityData.popularNoticeTypes.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">
              Most Requested Legal Notices in {cityData.name}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cityData.popularNoticeTypes.slice(0, 3).map((slug) => {
                const notice = getNoticeData(slug);
                if (!notice) return null;
                return (
                  <Link
                    key={slug}
                    href={`/send-legal-notice/${slug}/${cityData.slug}`}
                    className="border rounded-lg p-4 hover:shadow-lg transition flex flex-col h-full items-start"
                  >
                    <h4 className="font-semibold mb-2">{notice.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                       {/* Using description from SEO data for summary */}
                      {notice.seo.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
