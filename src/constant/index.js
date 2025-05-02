const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "+", label: "Years on Programming" },
    { value: 15, suffix: "+", label: "Portfolio Projects" },
    { value: 20, suffix: "+", label: "Stack Explored" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  // const techStackImgs = [
  //   {
  //     name: "Laravel Developer",
  //     imgPath: "/images/logos/laravel.png",
  //   },
  //   // {
  //   //   name: "Python Developer",
  //   //   imgPath: "/images/logos/python.svg",
  //   // },
  //   // {
  //   //   name: "Backend Developer",
  //   //   imgPath: "/images/logos/node.png",
  //   // },
  //   // {
  //   //   name: "Interactive Developer",
  //   //   imgPath: "/images/logos/three.png",
  //   // },
  //   // {
  //   //   name: "Project Manager",
  //   //   imgPath: "/images/logos/git.svg",
  //   // },
  // ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Laravel Developer",
      modelPath: "/models/laravel-logo.glb",
      scale: 2,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Irfan brought creativity and technical expertise to the team, significantly improving our supply material performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/suzuki.svg",
      logoPath: "/images/suzukilogo.svg",
      title: "Material Control Staff",
      date: "Februari 2020 - December 2024",
      responsibilities: [
      "Managed over 350 types of materials and components, ensuring 100% compliance with purchase orders.",
"Conducted regular stock opname to improve inventory accuracy to 98% within the ERP system.",
"Collaborated with the production team to reduce material lead time by 20%, ensuring smooth, uninterrupted production processes.",
"Coordinated with 27+ vendors to ensure on-time deliveries, reducing supply delay.",
      ],
    },
    {
      review:
        "Through his personal projects, Irfan demonstrates exceptional dedication to learning and delivering web solutions that are scalable, user-friendly, and in line with industry standards.",
      imgPath: "/images/NgodingTerus.png",
      logoPath: "/images/gwcode.svg",
      title: "Junior Full Stack Developer",
      date: "Jan 2024 - Present",
      responsibilities: [
        " Developed various dummy web application projects to sharpen both front-end and back-end skills.",
        "Designed and implemented features based on simulated client needs to mirror real-world project scenarios.",
        "Built projects following industry best practices, including Git version control, API integration, and responsive design.",
        "Continuously updated portfolio with new projects as part of ongoing professional development.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Sukiman",
      mentions: "sukiman@suzuki.co.id",
      review:
        "I can't say enough good things about Irfan. His attention to detail and dedication to his work are unmatched. He consistently delivers high-quality results on time, and his discipline and diligence make him a true asset to any team.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Agustinus H",
      mentions: "agustinus.h@suzuki.co.id",
      review:
        "Irfan is a hard-working individual with an incredible drive to grow and learn. He approaches every project with enthusiasm and is always willing to go the extra mile. His dedication, combined with his eagerness to improve, makes him an invaluable team member. He’s the kind of person who doesn’t just meet expectations, but consistently exceeds them.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Diky Tri",
      mentions: "diky.t@suzuki.co.id",
      review:
        "My friend, Irfan is an outstanding teammate. He brings a professional attitude to every project and knows how to collaborate effectively with everyone. His ability to build strong, friendly relationships within the team makes him easy to work with, and his approachability ensures that communication flows smoothly. At the same time, he’s always focused on delivering top-quality results, balancing professionalism with a great sense of camaraderie.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Ibnu Kenza",
      mentions: "ibnukenza@bangkit.academy",
      review:
        "Irfan is not only a great friend but also an excellent mentor, especially in backend development. His expertise is unmatched, and he has a talent for explaining complex concepts clearly. Always supportive, he’s the go-to person for guidance in backend challenges.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Krisna Wikrama",
      mentions: "krisnawikrama@bangkit.academy",
      review:
        "Irfan is an invaluable team member when it comes to problem-solving. He approaches challenges with a calm and focused mindset, always finding effective solutions. His ability to collaborate and think critically makes him a key asset to any team.",
      imgPath: "/images/client4.png",
    },
    {
      name: "Rezky Putra",
      mentions: "rezky@sanbercode",
      review:
        "Irfan is a fast learner who adapts quickly to new challenges. His ability to grasp new concepts and apply them efficiently is impressive. Whether it's mastering new technologies or tackling unfamiliar tasks, he consistently proves his ability to pick things up fast and deliver results.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/irfanxngrh",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/irfan-nugroho",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      url: "https://www.x.com/nwxgrh",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/irfan-nugroho",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    // techStackImgs,
    navLinks,
  };