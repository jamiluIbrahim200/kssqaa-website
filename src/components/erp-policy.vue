<script setup>
import { CheckCircleIcon } from "@zhuowenli/vue-feather-icons";

const privacyContent = {
  title: "Privacy Policy for KSSQAA Examination Registration",
  effectiveDate: "07/10/26",
  sections: [
    {
      // Introduction (no heading)
      intro: `This privacy policy applies to the KSSQAA Examination Registration app (hereby referred to as the "Application") for mobile devices that was created by TheCodeUnit-Soft. This service is provided "AS IS".`,
    },
    {
      title: "1. Information Collection, Account Access, and Use",
      intro: `For a better experience while using our Application, we may require you to provide certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.`,
      items: [
        {
          label: "Account Access",
          text: "Accounts and access to the Application may be managed through KSSQAA and authorised schools or administrators. Users may not be able to create accounts independently through the Application.",
        },
        {
          label: "User-Provided Data",
          text: "We collect information entered into the Application during examination registration, such as candidate details, school information, examination subjects, passport photographs, registration information, and other information required to administer examinations.",
        },
        {
          label: "Examination Data",
          text: "The Application may collect and process examination-related information, including registration details, selected subjects, examination records, and results where applicable.",
        },
        {
          label: "Automatically Collected Data",
          text: "The Application may collect certain information automatically, including the type of mobile device used, device identifiers, device IP address, and mobile operating system, where necessary for the operation, security, and improvement of the Application.",
        },
        {
          label: "Device Permissions",
          text: "With your permission, the Application may access device features such as the Camera and Storage/Files where required for examination registration functions, such as capturing or uploading a passport photograph or required documents. Permissions can be adjusted at any time through your device settings.",
        },
      ],
    },
    {
      title: "2. Third-Party Services and Security",
      intro: `The Application may use third-party services that help us provide and maintain the Application.`,
      items: [
        {
          label: "Third-Party Providers",
          text: "Services such as Google Play Services, Firebase Analytics, Crashlytics, cloud services, payment providers, or other authorised service providers may be used to facilitate Application operations, analyse usage, process transactions, or identify technical errors.",
        },
        {
          label: "Data Security",
          text: "We employ commercially acceptable physical, technical, and administrative safeguards to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.",
        },
      ],
    },
    {
      title: "3. Data Retention and User Rights",
      intro: `We retain registration and examination information for as long as necessary to provide examination services, maintain official examination records, fulfil organisational requirements, and comply with applicable laws and regulations.`,
      items: [
        {
          label: "Data Access, Correction & Deletion Requests",
          text: "If you need to access, correct, or request deletion of your personal information, you should contact KSSQAA or the authorised administrator responsible for your registration. Requests may be subject to verification and applicable legal or examination-record requirements.",
        },
        {
          label: "Children's Privacy",
          text: "The Application may be used to register candidates who are under the age of 18. Where required, appropriate consent or authorisation from a parent, guardian, school, or other authorised person will be obtained. Candidate information is collected and used for examination registration and related official purposes.",
        },
      ],
    },
    {
      title: "4. Changes and Contact Information",
      intro: `We may update our Privacy Policy from time to time. Updates will be reflected directly on this page with an updated effective date. If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, contact:`,
    },
  ],
  contact: {
    organisation: "KSSQAA",
    email: "info@kssqaa.org",
    phone: "08025211116",
    website: "www.kssqaa.org",
    websiteUrl: "https://www.kssqaa.org",
    developer: "TheCodeUnit-Soft",
    developerEmail: "info@thecodeunit.org.ng",
  },
};
</script>

<template>
  <div class="overflow-hidden">
    <BRow class="justify-content-center py-5">
      <BCol cols="12" lg="10">
        <BCard no-body>
          <!-- Header -->
          <div class="bg-primary-subtle position-relative">
            <BCardBody class="p-5">
              <div class="text-center">
                <h4 class="text-uppercase">{{ privacyContent.title }}</h4>
                <p class="mb-0 text-muted fw-semibold mt-2">Effective Date: {{ privacyContent.effectiveDate }}</p>
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

                <p v-if="section.intro" class="text-muted mb-2" style="line-height: 2rem">{{ section.intro }}</p>

                <ul v-if="section.items" class="list-unstyled mb-0">
                  <li v-for="(item, i) in section.items" :key="i" class="d-flex text-muted mb-2" style="line-height: 2rem">
                    <span class="me-2">•</span>
                    <span><strong class="text-body">{{ item.label }}:</strong> {{ item.text }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Contact -->
            <div class="mt-5 p-4 border-top">
              <div class="text-center text-muted" style="line-height: 2rem">
                <strong class="text-body">{{ privacyContent.contact.organisation }}</strong><br />
                Email: <a :href="`mailto:${privacyContent.contact.email}`">{{ privacyContent.contact.email }}</a><br />
                Phone: <a :href="`tel:${privacyContent.contact.phone}`">{{ privacyContent.contact.phone }}</a><br />
                Website: <a :href="privacyContent.contact.websiteUrl" target="_blank" rel="noopener noreferrer">{{ privacyContent.contact.website }}</a><br /><br />
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>