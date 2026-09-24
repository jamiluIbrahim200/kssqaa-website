<script setup>
import { CheckCircleIcon } from "@zhuowenli/vue-feather-icons";

const privacyContent = {
  title: "Privacy Policy for KSSQAA Examiner Mobile Application",
  lastUpdated: "11 July, 2026",
  sections: [
    {
      icon: true,
      title: "Introduction",
      content: `
        The Kaduna State Schools Quality Assurance Authority (KSSQAA) ("we," "us," or "our") operates the KSSQAA Examiner Mobile Application. This Privacy Policy explains how we collect, use, protect, and manage information when authorized examiners and subject heads use our application for official examination score entry and management.
        
        The KSSQAA Examiner application is designed to provide a secure platform for authorized personnel to enter, submit, and manage examination scores for KSSQAA-administered examinations.
      `
    },
    {
      icon: true,
      title: "1. Information Collection and Use",
      content: `
        The application collects and processes information required for secure examination operations, including:
        
        <strong>User Information</strong><br>
        • Examiner and subject head names.<br>
        • Assigned roles and permissions.<br>
        • Login credentials and authentication information.<br>
        • Contact details provided by KSSQAA administrators.<br><br>
        User accounts are created and managed by authorized KSSQAA administrators. The application does not provide public user registration.
        
        <strong>Examination Data</strong><br>
        • Examination details.<br>
        • Assigned subjects and examination responsibilities.<br>
        • Student examination scores and related academic records entered by authorized users.<br>
        • Score submission and verification records.
        
        <strong>Technical Information</strong><br>
        • Device information and application logs for security monitoring, troubleshooting, and improving system reliability.
      `
    },
    {
      icon: true,
      title: "2. Data Usage",
      content: `
        Collected information is used for:<br>
        • Authenticating authorized examiners and subject heads.<br>
        • Allowing secure entry and submission of examination scores.<br>
        • Monitoring examination processes and maintaining data accuracy.<br>
        • Supporting score verification, review, and approval workflows.<br>
        • Generating official examination reports and records.<br>
        • Preventing unauthorized access, errors, and misuse of the application.
      `
    },
    {
      icon: true,
      title: "3. Data Access and Sharing",
      content: `
        Access to examination data is restricted to authorized KSSQAA personnel and approved users based on assigned roles and responsibilities.<br><br>
        We do not sell, rent, or share examination information with unauthorized third parties.<br>
        Information may only be accessed or disclosed for official examination administration, quality assurance purposes, legal requirements, or regulatory obligations.
      `
    },
    {
      icon: true,
      title: "4. Data Security",
      content: `
        KSSQAA implements security measures to protect examination information, including:<br>
        • Secure communication and data transmission.<br>
        • Role-based access control.<br>
        • User authentication and authorization.<br>
        • Secure storage of examination records.<br>
        • Monitoring and protection against unauthorized access.
      `
    },
    {
      icon: true,
      title: "5. Data Retention",
      content: `
        Examination records and related data are retained according to KSSQAA’s examination management policies and regulatory requirements. Records may be maintained for examination verification, auditing, result processing, historical reference, and quality assurance purposes.
      `
    },
    {
      icon: true,
      title: "6. Children's Privacy",
      content: `
        The KSSQAA Examiner application is intended solely for authorized examination personnel, including examiners and subject heads.<br><br>
        While the application may process student examination information required for official examination activities, it does not collect information directly from children or allow student registration.
      `
    },
    {
      icon: true,
      title: "7. User Responsibilities",
      content: `
        Authorized users are responsible for:<br>
        • Keeping their login credentials confidential.<br>
        • Entering accurate examination scores.<br>
        • Using the application only for assigned examination duties.<br>
        • Reporting suspected unauthorized access or security concerns.
      `
    },
    {
      icon: true,
      title: "8. Changes to This Privacy Policy",
      content: `
        KSSQAA may update this Privacy Policy when necessary to reflect changes in examination processes, application features, or regulatory requirements. Users will be notified of significant changes through official channels.
      `
    }
  ]
};
</script>

<template>
  <div class="overflow-hidden">
    <BRow class="justify-content-center py-5">
      <BCol cols="12" lg="10" >
        <BCard no-body>
          <!-- Header -->
          <div class="bg-primary-subtle position-relative">
            <BCardBody class="p-5">
              <div class="text-center ">
                <h4 class="text-uppercase">{{ privacyContent.title }}</h4>
                <p class="mb-0 text-muted fw-semibold mt-2">Last Updated: {{ privacyContent.lastUpdated }}</p>
              </div>
            </BCardBody>
            <div class="shape">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1440" height="60" preserveAspectRatio="none" viewBox="0 0 1440 60">
                <g mask="url(#SvgjsMask1001)" fill="none">
                  <path d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z" style="fill: var(--vz-secondary-bg);"></path>
                </g>
                <defs>
                  <mask id="SvgjsMask1001">
                    <rect width="1440" height="60" fill="#ffffff"></rect>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <BCardBody class="p-4 p-md-5">
            <div v-for="(section, index) in privacyContent.sections" :key="index" class="d-flex mb-4">
              <div class="flex-shrink-0 me-3">
                <CheckCircleIcon class="text-success icon-dual-success icon-xs" />
              </div>
              <div class="flex-grow-1">
                <h5 v-if="section.title" class="fw-semibold">{{ section.title }}</h5>
                <div class="text-muted" v-html="section.content" style="line-height:2.2rem"></div>
              </div>
            </div>

            <!-- Motto & Contact -->
            <div class="mt-5 p-4 border-top">
              <p class="text-center fw-medium mb-2">"Improving Education Through Transparency and Accountability"</p>
              
              <div class="text-center text-muted small" style="line-height:2rem">
                <strong>Kaduna State Schools Quality Assurance Authority (KSSQAA)</strong><br>
                Email: info@kssqaa.org<br>
                Website: www.kssqaa.org<br><br>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>