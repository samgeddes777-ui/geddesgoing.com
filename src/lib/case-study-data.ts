export const caseStudies = [
  {
    slug: "midwest-manufacturing",
    category: "Manufacturing",
    title: "AI-Powered Quality Control for Midwest Manufacturer",
    subtitle: "How a precision parts manufacturer reduced defects by 78%",
    challenge: "A 50-year-old precision parts manufacturer in Dane County was experiencing 12% defect rates due to manual inspection limitations. As production scaled, quality control became a bottleneck, and customer complaints were increasing.",
    approach: "We implemented a custom computer vision system using high-resolution cameras and ML models trained on their specific defect types. The system integrates directly with their existing QC stations and flags issues in real-time.",
    result: "The AI-powered inspection system reduced defect rates from 12% to under 3% within the first three months. Inspection time dropped by 60%, and the company saved an estimated $340,000 annually in reduced waste and rework.",
    metrics: [
      { value: "78%", label: "Defect reduction" },
      { value: "60%", label: "Faster inspection" },
      { value: "$340K", label: "Annual savings" },
      { value: "3 months", label: "Implementation" },
    ],
    testimonial: {
      quote: "This wasn't about replacing our inspectors—it was about giving them superpowers. Now they focus on the edge cases while the AI handles the routine stuff.",
      author: "Quality Manager",
      company: "Midwest Precision Parts",
    },
  },
  {
    slug: "madison-healthcare",
    category: "Healthcare",
    title: "Patient Intake Automation for Madison Practice",
    subtitle: "A healthcare practice reclaimed 25+ hours every week",
    challenge: "A growing healthcare practice in Madison was spending over 25 hours per week on manual data entry, appointment scheduling, and patient follow-up. Administrative burden was burning out staff and limiting growth.",
    approach: "We deployed an AI-powered patient intake system featuring NLP-powered document processing for forms, intelligent appointment scheduling that learns patient preferences, and automated follow-up workflows.",
    result: "Staff reclaimed 25+ hours weekly—time now spent on patient care. New patient onboarding speed tripled, and the practice increased capacity by 15% without adding administrative headcount.",
    metrics: [
      { value: "25hrs", label: "Saved weekly" },
      { value: "92%", label: "Automation accuracy" },
      { value: "3x", label: "Faster onboarding" },
      { value: "15%", label: "Capacity increase" },
    ],
    testimonial: {
      quote: "Our front desk staff actually enjoys coming to work now. They're doing meaningful work instead of data entry.",
      author: "Practice Administrator",
      company: "Madison Family Health",
    },
  },
  {
    slug: "wi-nonprofit",
    category: "Nonprofit",
    title: "Grant Writing AI Assistant for Wisconsin Nonprofit",
    subtitle: "From 3 applications a year to 15, securing $2.1M",
    challenge: "A statewide nonprofit wanted to expand its grant-seeking efforts but had limited administrative capacity. Their small team was drowning in manual research and proposal drafting.",
    approach: "We built a custom AI assistant that researches funding opportunities, drafts proposal sections based on past successful applications, and manages the application pipeline with automated reminders.",
    result: "The nonprofit went from 3 grant applications per year to 15—and secured $2.1M in new funding. Their grant writing time dropped by 80%, allowing staff to focus on program delivery.",
    metrics: [
      { value: "5x", label: "More applications" },
      { value: "$2.1M", label: "Funding secured" },
      { value: "80%", label: "Time saved" },
      { value: "340%", label: "ROI in first year" },
    ],
    testimonial: {
      quote: "We always knew there was more funding out there—we just couldn't catch it. This system changed everything for our mission.",
      author: "Executive Director",
      company: "Wisconsin Community Foundation Partner",
    },
  },
  {
    slug: "professional-services",
    category: "Professional Services",
    title: "Intelligent Document Processing for Law Firm",
    subtitle: "Cutting contract review time by 70%",
    challenge: "A mid-sized law firm in Madison was spending countless hours on contract review and due diligence. Associates were burned out, and client costs were higher than necessary.",
    approach: "We implemented an AI contract analysis system with natural language processing that identifies key clauses, flags potential risks, and provides automated summaries. The system learns from the firm's specific playbooks and precedents.",
    result: "Contract review time dropped 70%, and the firm reduced fees to clients by an average of 45% on matters where AI assisted. The system maintains 99% accuracy with human oversight.",
    metrics: [
      { value: "70%", label: "Faster review" },
      { value: "45%", label: "Cost reduction" },
      { value: "99%", label: "Accuracy rate" },
      { value: "3x", label: "More capacity" },
    ],
    testimonial: {
      quote: "Our clients are thrilled with faster, more accurate work—and our associates have a much better work-life balance. That's worth more than any efficiency metric.",
      author: "Managing Partner",
      company: "Madison Legal Group",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}