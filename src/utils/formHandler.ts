// Form submission handler for intake forms
import { supabase, IntakeSubmission } from '../lib/supabase';

export interface FormData {
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  state: string;
  revenue: string;
  dealType: string;
  timeInBusiness: string;
  existingDebt: string;
  notes: string;
}

export const submitIntakeForm = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      console.warn('Supabase not configured, using localStorage fallback');
      console.log('Environment variables check:');
      console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
      console.log('VITE_SUPABASE_ANON_KEY exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
      
      // Fallback to localStorage if Supabase is not configured
      const existingSubmissions = JSON.parse(localStorage.getItem('intakeSubmissions') || '[]');
      const submission = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      existingSubmissions.push(submission);
      localStorage.setItem('intakeSubmissions', JSON.stringify(existingSubmissions));
      console.log('Stored in localStorage:', submission);
      
      return {
        success: true,
        message: 'Application submitted successfully! (Stored locally - configure Supabase for cloud storage)'
      };
    }

    console.log('Using Supabase for submission...');
    console.log('Form data:', formData);

    // Convert form data to Supabase format
    const submissionData: IntakeSubmission = {
      client_name: formData.clientName,
      company_name: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      revenue: formData.revenue ? parseFloat(formData.revenue.replace(/,/g, '')) : null,
      deal_type: formData.dealType,
      time_in_business: formData.timeInBusiness,
      existing_debt: formData.existingDebt || null,
      notes: formData.notes || null,
      status: 'pending'
    };

    console.log('Prepared submission data:', submissionData);

    // Insert into Supabase database
    const { data, error } = await supabase
      .from('intake_submissions')
      .insert([submissionData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Form submission successful:', data);
    
    return {
      success: true,
      message: 'Application submitted successfully! We will contact you within 24 hours.'
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again or contact support.'
    };
  }
};

export const getSubmissions = async (): Promise<IntakeSubmission[]> => {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      // Fallback to localStorage
      const localSubmissions = JSON.parse(localStorage.getItem('intakeSubmissions') || '[]');
      return localSubmissions.map((sub: any) => ({
        id: sub.id,
        client_name: sub.clientName,
        company_name: sub.companyName,
        email: sub.email,
        phone: sub.phone,
        state: sub.state,
        revenue: sub.revenue ? parseFloat(sub.revenue.replace(/,/g, '')) : null,
        deal_type: sub.dealType,
        time_in_business: sub.timeInBusiness,
        existing_debt: sub.existingDebt || null,
        notes: sub.notes || null,
        status: sub.status,
        created_at: sub.timestamp
      }));
    }

    const { data, error } = await supabase
      .from('intake_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching submissions:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return [];
  }
};
