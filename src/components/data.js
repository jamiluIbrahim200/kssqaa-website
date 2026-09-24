//General images
export default {
  generalData: {
    generalLogo: new URL("@/assets/img/logo.png", import.meta.url).href,
    proprietorLogin:'https://school.kssqaa.org/',
    theCodeUnit:'https://www.thecodeunit.org.ng/',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3968971260983!2d7.4179854744403535!3d10.54808216336531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2cab915555555%3A0x527e356ddd2b916e!2sKaduna%20State%20Schools%20Quality%20Assurance%20Authority!5e0!3m2!1sen!2sng!4v1718887015860!5m2!1sen!2sng",
    organization: {
      name: "Kaduna State Quality Assurence",
      website: {
        icon: "ri-globe-line",
        text: "To be a model in the provision of quality and inclusive education in Nigeria.",
      },
    },
    links: [
    {
      title: "Reach Us",
      items: [
        {
          icon: "ri-map-pin-line",
          text: "GCXC+66M, Government College Kaduna, Road, Abakpa, Kurmin Mashi 800283",
        },
        { icon: "ri-mail-line", text: "info@kssqaa.org" },
        { icon: "ri-phone-line", text: "08025211116" },
      ],
    },
  ],
  copyright: `© Copyright  ${new Date().getFullYear()}  Kaduna State Schools Quality Assurance Authority. All rights reserved.`,  
  socials: {
    title: "Socials",
    items: [
      { icon: "ri-facebook-fill", url: "https://www.facebook.com/share/3sHU168nKjmdegmV/?mibextid=qi2Omg" },
      { icon: "ri-youtube-fill", url: "https://youtube.com/@kadquality?si=Uhqy22Z0c26kyvWB" },
      { icon: "ri-twitter-fill", url: "https://x.com/kadquality?s=21" },
      { icon: "ri-instagram-fill", url: "https://www.instagram.com/kadqualityedu?igsh=emRicnp1ajBkcG40" },
    ],
  },
  },
};
