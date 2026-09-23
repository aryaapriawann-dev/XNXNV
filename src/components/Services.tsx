"use client";

import ServiceCard from "@/components/ServiceCard";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Services section component displaying a grid of service cards.
 * Each card shows service icon, title, description, and price.
 */
export default function Services() {
  const { t } = useTranslation();
  const services = t("services.items");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service: (typeof services)[0]) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
