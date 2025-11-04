module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

module.exports = {
  darkMode: "media", // หรือ 'class' ถ้าคุณอยากเปิดเองด้วยปุ่ม toggle
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
