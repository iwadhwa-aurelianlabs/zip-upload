import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

export function FinancingHelpForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    trackEvent('form_submit_financing_help');

    toast({
      title: "Request received",
      description: "We'll respond within 1–2 business days.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="financing-type">Financing Type *</Label>
          <Select name="financing-type" required>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="unsure">Unsure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="target-amount">Target Amount</Label>
          <Input id="target-amount" name="target-amount" placeholder="$" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeframe">Timeframe *</Label>
          <Select name="timeframe" required>
            <SelectTrigger>
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lt-30">Less than 30 days</SelectItem>
              <SelectItem value="30-90">30–90 days</SelectItem>
              <SelectItem value="90+">90+ days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="jurisdiction">Jurisdiction *</Label>
          <Input id="jurisdiction" name="jurisdiction" placeholder="State or country" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Current Status *</Label>
          <Select name="status" required>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="idea">Idea</SelectItem>
              <SelectItem value="term-sheet">Term Sheet</SelectItem>
              <SelectItem value="diligence">Diligence</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes *</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Tell us about your financing needs..."
          required
        />
      </div>

      <div>
        <Button type="submit" variant="institutional" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
        <p className="microcopy">Typical response: 1–2 business days.</p>
      </div>
    </form>
  );
}
