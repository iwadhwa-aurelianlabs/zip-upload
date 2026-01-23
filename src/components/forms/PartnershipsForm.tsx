import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const partnerTypes = [
  "Custody",
  "Administration",
  "Audit",
  "Legal",
  "Origination",
  "Servicing",
  "Distribution",
  "Other",
];

export function PartnershipsForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    trackEvent('form_submit_partnership');

    toast({
      title: "Partnership inquiry received",
      description: "We'll respond within 1–2 business days.",
    });

    setIsSubmitting(false);
    setSelectedTypes([]);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner-name">Name *</Label>
          <Input id="partner-name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partner-org">Organization *</Label>
          <Input id="partner-org" name="organization" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partner-role">Role / Title *</Label>
          <Input id="partner-role" name="role" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partner-email">Email *</Label>
          <Input id="partner-email" name="email" type="email" required />
        </div>
      </div>

      <div className="space-y-3">
        <Label>Partner Type (select all that apply) *</Label>
        <div className="flex flex-wrap gap-2">
          {partnerTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => toggleType(type)}
              className={cn(
                "px-3 py-1.5 text-sm border transition-colors",
                selectedTypes.includes(type)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary"
              )}
            >
              {type}
            </button>
          ))}
        </div>
        <input
          type="hidden"
          name="partner-types"
          value={selectedTypes.join(",")}
          required={selectedTypes.length === 0}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="partner-geography">Geography</Label>
        <Input id="partner-geography" name="geography" placeholder="e.g., North America, Global" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="partner-offer">What you offer / seek *</Label>
        <Textarea
          id="partner-offer"
          name="offer"
          rows={4}
          placeholder="Describe your capabilities and what you're looking for in a partnership..."
          required
        />
      </div>

      <div>
        <Button type="submit" variant="institutional" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </Button>
        <p className="microcopy">Typical response: 1–2 business days.</p>
      </div>
    </form>
  );
}
