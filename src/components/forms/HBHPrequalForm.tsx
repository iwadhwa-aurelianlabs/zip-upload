import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

export function HBHPrequalForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!acknowledged) {
      toast({
        title: "Acknowledgment required",
        description: "Please acknowledge the disclosures before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    trackEvent('form_submit_hbh_prequal');

    toast({
      title: "Pre-qualification request received",
      description: "We'll respond within 1–2 business days.",
    });

    setIsSubmitting(false);
    setAcknowledged(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="hbh-name">Name *</Label>
          <Input id="hbh-name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hbh-email">Email *</Label>
          <Input id="hbh-email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hbh-phone">Phone</Label>
          <Input id="hbh-phone" name="phone" type="tel" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hbh-location">Purchase Location (State) *</Label>
          <Input id="hbh-location" name="location" placeholder="e.g., California" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hbh-price">Estimated Price</Label>
          <Input id="hbh-price" name="price" placeholder="$" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hbh-timeframe">Timeframe *</Label>
          <Select name="timeframe" required>
            <SelectTrigger>
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lt-60">Less than 60 days</SelectItem>
              <SelectItem value="60-180">60–180 days</SelectItem>
              <SelectItem value="180+">180+ days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hbh-notes">Notes</Label>
        <Textarea
          id="hbh-notes"
          name="notes"
          rows={3}
          placeholder="Any additional context..."
        />
      </div>

      <div className="space-y-4 p-4 border border-border bg-muted/50">
        <p className="text-sm font-medium">Required Disclosures</p>
        <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
          <li>Pre-qualification is not approval or commitment.</li>
          <li>Eligibility varies by profile, property, jurisdiction, and partner terms.</li>
          <li>HBH is an intake and navigation layer—not a lender decisioning engine.</li>
        </ul>
        <div className="text-xs text-muted-foreground space-y-2">
          <p>What happens next: quick intake review → next-step request (if applicable).</p>
          <p>Availability depends on borrower profile, property, jurisdiction, and partner terms.</p>
        </div>
        <div className="flex items-start space-x-3">
          <Checkbox
            id="acknowledge"
            checked={acknowledged}
            onCheckedChange={(checked) => setAcknowledged(checked === true)}
          />
          <Label htmlFor="acknowledge" className="text-sm font-normal leading-relaxed cursor-pointer">
            I acknowledge and understand these disclosures *
          </Label>
        </div>
      </div>

      <div>
        <Button type="submit" variant="institutional" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Start Pre-Qualification"}
        </Button>
        <p className="microcopy">Typical response: 1–2 business days.</p>
      </div>
    </form>
  );
}
