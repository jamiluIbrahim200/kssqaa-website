<script setup>
import data from "@/components/data";
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";

// Dynamic contact data
const contactData = reactive({
  topdata:{
    h3:'Contact Us',
    description:'For more information about our services or to get involved with our initiatives, visit us at our office located GCXC+66M, Government College Kaduna, Road, Abakpa, Kurmin Mashi 800283 Together, we can achieve and sustain the highest standards of educational quality for all.'
  },
  mapUrl: data?.generalData?.map,

  contactInfo: [
    {
      id: 1,
      icon: "ri-map-pin-line",
      title: "Location",
      content: "Kaduna State Schools Quality Assurance Authority",
      type: "text",
      link: null,
    },
    {
      id: 2,
      icon: "ri-mail-send-line",
      title: "Email",
      content: "info@kssqaa.org",
      type: "email",
      link: "mailto:info@kssqaa.org",
    },
    {
      id: 3,
      icon: "ri-phone-line",
      title: "Phone",
      content: "08025211116",
      type: "phone",
      link: "tel:08025211116",
    },
  ],

  formFields: [
    {
      id: "fullname",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
      colClass: "col-md-6",
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Subject",
      required: true,
      colClass: "col-md-6",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "e.g. example@mail.com",
      required: true,
      colClass: "col-md-6",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter phone number",
      required: true,
      colClass: "col-md-6",
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Write your message here...",
      required: true,
      colClass: "col-12",
      rows: 4,
    },
  ],

  formData: reactive({
    fullname: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  }),
});

// Form submission handler
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted:", contactData.formData);
};
</script>

<template>
  <Layout>
    <div class="py-10 bg-light">
      <div class="text-center py-5 px-3 px-lg-5 mt-5">
        <h3 class="mb-3 fw-bold text-primary fs-1 text-uppercase">{{ contactData?.topdata?.h3 }}</h3>
      <p
        class="text-muted mb-4 ff-secondary lead fw-medium"
        style="line-height: 2.5rem; font-size: 16px"
      >
        {{ contactData?.topdata?.description }}
      </p>
      </div>
      <div
        class="d-flex flex-column align-items-center text-sm gap-4 position-relative h-100 overflow-hidden"
      >
        <!-- Dynamic Map Section -->
        <div class="position-relative w-100">
          <iframe
            :src="contactData.mapUrl"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-100 h-420"
          ></iframe>
        </div>

        <!-- Dynamic Contact Card -->
        <div class="mb-lg-5" style="margin-top: -200px">
          <div class="row justify-content-center">
            <div
              class="col-lg-8 col-md-10 col-12 bg-white shadow rounded p-4 p-md-5 position-relative z-1"
            >
              <!-- Dynamic Contact Info -->
              <div class="row gy-4 justify-content-center mb-4 text-center">
                <div
                  v-for="contact in contactData.contactInfo"
                  :key="contact.id"
                  class="col-12 col-md-4 d-flex flex-column align-items-center"
                >
                  <div
                    class="rounded-circle bg-primary bg-opacity-25 text-primary d-flex align-items-center justify-content-center mb-3"
                    style="width: 60px; height: 60px"
                  >
                    <i :class="contact.icon + ' fs-3'"></i>
                  </div>
                  <template v-if="contact.type === 'email'">
                    <a
                      :href="contact.link"
                      class="text-decoration-none text-dark small fw-medium"
                    >
                      {{ contact.content }}
                    </a>
                  </template>
                  <template v-else-if="contact.type === 'phone'">
                    <a
                      :href="contact.link"
                      class="text-decoration-none text-dark small fw-medium"
                    >
                      {{ contact.content }}
                    </a>
                  </template>
                  <template v-else>
                    <span class="fw-medium small">
                      {{ contact.content }}
                    </span>
                  </template>
                </div>
              </div>

              <!-- Dynamic Contact Form -->
              <form @submit="handleSubmit" class="row g-4">
                <div
                  v-for="field in contactData.formFields"
                  :key="field.id"
                  :class="field.colClass"
                >
                  <label class="form-label fw-medium">
                    {{ field.label }}
                    <span v-if="field.required" class="text-danger">*</span>
                  </label>

                  <template v-if="field.type === 'textarea'">
                    <textarea
                      v-model="contactData.formData[field.id]"
                      :placeholder="field.placeholder"
                      :rows="field.rows || 4"
                      class="form-control py-2"
                      :required="field.required"
                    ></textarea>
                  </template>

                  <template v-else>
                    <input
                      v-model="contactData.formData[field.id]"
                      :type="field.type"
                      :placeholder="field.placeholder"
                      class="form-control py-2"
                      :required="field.required"
                    />
                  </template>
                </div>

                <!-- Submit Button -->
                <div class="col-12 text-end mt-3">
                  <button
                    type="submit"
                    class="btn btn-primary px-5 py-2 fw-semibold shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.h-420 {
  height: 420px;
}

.mt-n200 {
  margin-top: -200px;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.text-xs {
  font-size: 0.75rem;
}

.z-10 {
  z-index: 10;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .col-md-8 {
    width: 100% !important;
  }
}
</style>
