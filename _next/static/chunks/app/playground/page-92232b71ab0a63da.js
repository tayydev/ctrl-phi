(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{5403:function(e,t,n){Promise.resolve().then(n.bind(n,9237))},3141:function(e,t,n){"use strict";n.r(t);var a=n(7437);n(2265);var i=n(7907),o=n(8792);t.default=()=>{let e=(0,i.usePathname)();return(0,a.jsx)("div",{children:(0,a.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 font-mono",children:(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-col items-center justify-center mx-auto p-2",children:[(0,a.jsx)("a",{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse px-5",children:(0,a.jsx)("h1",{className:"text-4xl",children:"ctrl-φ"})}),(0,a.jsx)("div",{className:"w-full flex items-center justify-center py-2",id:"navbar-default",children:(0,a.jsxs)("ul",{className:"font-medium flex flex-row justify-center",children:[(0,a.jsx)("li",{children:(0,a.jsx)(o.default,{href:"/",className:"md:text-xl sm:text-md ".concat("/"==e?"text-blue-500":"text-white"," px-2"),"aria-current":"page",children:"Install"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.default,{href:"/playground",className:"md:text-xl sm:text-md ".concat("/playground"==e?"text-blue-500":"text-white"," px-2"),children:"Playound"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.default,{href:"/about",className:"md:text-xl sm:text-md ".concat("/about"==e?"text-blue-500":"text-white"," px-2"),children:"About"})})]})})]})})})}},9237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7437),i=n(2265),o=n(3141),s=n(3299),r=n(6495),h=n(6590),l=n(8562);function c(){let[e,t]=(0,i.useState)(""),[n,c]=(0,i.useState)(""),[d,u]=(0,i.useState)([]),m=(0,i.useRef)(null),g=e=>{e.preventDefault(),p()},f=e=>{if(m.current){let t=m.current;if(null!=t){let n=t.value.indexOf(e);if(-1!==n){let a=n+e.length;t.focus(),t.setSelectionRange(n,a);let i=n/t.value.length;t.scrollTop=t.scrollHeight*i-20}}}},p=async()=>{try{let t=await fetch("https://api.ctrl-phi.app/api",{method:"POST",headers:{"Content-Type":"application/json","User-Agent":"insomnia/8.6.1"},body:JSON.stringify({query:"why did he die",content:e})});if(!t.ok)throw Error("Error: ".concat(t.status));let n=await t.json();console.log(n.results),u(n.results)}catch(e){console.error("Failed to fetch data:",e)}};return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen items-center bg-white",children:[(0,a.jsx)("div",{className:"top-0 w-screen",children:(0,a.jsx)(o.default,{})}),(0,a.jsxs)("div",{className:"hidden md:flex flex-row w-screen items-center justify-center",children:[(0,a.jsx)("div",{className:"md:w-1/2 w-11/12 flex justify-center pt-8",children:(0,a.jsx)(s.Z,{id:"filled-multiline-static",label:"Text Input",multiline:!0,rows:20,maxRows:1e3,value:e,variant:"filled",sx:{width:"100%"},onChange:e=>{t(e.target.value)},inputRef:m})}),(0,a.jsxs)("div",{className:"px-10 justify-start items-center h-max flex flex-col mt-10 w-max",children:[(0,a.jsx)("form",{onSubmit:g,className:"w-max",children:(0,a.jsx)(s.Z,{label:"Search Text",InputProps:{endAdornment:(0,a.jsx)(r.Z,{position:"start",children:(0,a.jsx)(h.Z,{onClick:g,children:(0,a.jsx)(l.Z,{})})})},onChange:e=>{c(e.target.value)},onSubmit:()=>console.log("PEEPEE"),rows:1})}),d.map((e,t)=>(0,a.jsx)("div",{className:"py-3",children:(0,a.jsxs)("button",{onClick:t=>f(e.matched_text),className:"block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ",children:[(0,a.jsx)("h5",{className:"mb-1 text-md font-semibold tracking-tight text-gray-900",children:'"'.concat(e.matched_text,'"')}),(0,a.jsx)("h5",{className:"mb-1 text-md tracking-tight text-gray-700",children:"".concat(e.explanation)})]})},t))]})]}),(0,a.jsxs)("div",{className:"hidden md:flex flex-row",children:[(0,a.jsx)("div",{className:"p-5",children:(0,a.jsx)("button",{onClick:()=>t("On 8 June 1954, at his house at 43 Adlington Road, Wilmslow,[173] Turing's housekeeper found him dead. A post mortem was held that evening which determined that he had died the previous day at the age of 41 with Cyanide poisoning cited as the cause of death.[174][175] When his body was discovered, an apple lay half-eaten beside his bed, and although the apple was not tested for cyanide,[176] it was speculated that this was the means by which Turing had consumed a fatal dose.\n\nTuring's brother John identified the body the following day and took the advice given by Dr. Greenbaum to accept the verdict of the inquest as there was little prospect of establishing that the death was accidental.[177] The inquest was held the following day which determined the cause of death to be suicide.[164] Turing's remains were cremated at Woking Crematorium just two days later on 12 June 1954 with just three people attending[178][179] and his ashes were scattered in the gardens of the crematorium, just as his father's had been.[180] Turing's mother was on holiday in Italy at the time of his death and returned home after the inquest. She never accepted the verdict of suicide.[177]\n\nAndrew Hodges and another biographer, David Leavitt, have both speculated that Turing was re-enacting a scene from the Walt Disney film Snow White and the Seven Dwarfs (1937), his favourite fairy tale. Both men noted that (in Leavitt's words) he took \"an especially keen pleasure in the scene where the Wicked Queen immerses her apple in the poisonous brew\".[181]\n\nPhilosopher Jack Copeland has questioned various aspects of the coroner's historical verdict. He suggested an alternative explanation for the cause of Turing's death: the accidental inhalation of cyanide fumes from an apparatus used to electroplate gold onto spoons. The potassium cyanide was used to dissolve the gold. Turing had such an apparatus set up in his tiny spare room. Copeland noted that the autopsy findings were more consistent with inhalation than with ingestion of the poison. Turing also habitually ate an apple before going to bed, and it was not unusual for the apple to be discarded half-eaten.[182] Furthermore, Turing had reportedly borne his legal setbacks and hormone treatment (which had been discontinued a year previously) \"with good humour\" and had shown no sign of despondency before his death. He even set down a list of tasks that he intended to complete upon returning to his office after the holiday weekend.[182] Turing's mother believed that the ingestion was accidental, resulting from her son's careless storage of laboratory chemicals.[183] Biographer Andrew Hodges theorised that Turing deliberately left the nature of his death ambiguous in order to shield his mother from the knowledge that he had killed himself.[184]\n\n\nTuring's OBE currently held in Sherborne School archives\nIt has been suggested that Turing's belief in fortune-telling may have caused his depressed mood.[180] As a youth, Turing had been told by a fortune-teller that he would be a genius. In mid-May 1954, shortly before his death, Turing again decided to consult a fortune-teller during a day-trip to St Annes-on-Sea with the Greenbaum family.[180] According to the Greenbaums' daughter, Barbara:"),className:"block max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ",children:(0,a.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900",children:"Alan Turing"})})}),(0,a.jsx)("div",{className:"p-5",children:(0,a.jsx)("button",{onClick:()=>t("Abstract\nArtificial intelligence (AI), known by some as the industrial revolution (IR) 4.0, is going to change not only the way we do things, how we relate to others, but also what we know about ourselves. This article will first examine what AI is, discuss its impact on industrial, social, and economic changes on humankind in the 21st century, and then propose a set of principles for AI bioethics. The IR1.0, the IR of the 18th century, impelled a huge social change without directly complicating human relationships. Modern AI, however, has a tremendous impact on how we do things and also the ways we relate to one another. Facing this challenge, new principles of AI bioethics must be considered and developed to provide guidelines for the AI technology to observe so that the world will be benefited by the progress of this new intelligence.\n\nKeywords: Artificial intelligence, Bioethics, Principles of artificial intelligence bioethics\nGo to:\nWhat is artificial intelligence?\nArtificial intelligence (AI) has many different definitions; some see it as the created technology that allows computers and machines to function intelligently. Some see it as the machine that replaces human labor to work for men a more effective and speedier result. Others see it as “a system” with the ability to correctly interpret external data, to learn from such data, and to use those learnings to achieve specific goals and tasks through flexible adaptation [1].\n\nDespite the different definitions, the common understanding of AI is that it is associated with machines and computers to help humankind solve problems and facilitate working processes. In short, it is an intelligence designed by humans and demonstrated by machines. The term AI is used to describe these functions of human-made tool that emulates the “cognitive” abilities of the natural intelligence of human minds [2].\n\nAlong with the rapid development of cybernetic technology in recent years, AI has been seen almost in all our life circles, and some of that may no longer be regarded as AI because it is so common in daily life that we are much used to it such as optical character recognition or the Siri (speech interpretation and recognition interface) of information searching equipment on computer [3].\n\nGo to:\nDifferent types of artificial intelligence\nFrom the functions and abilities provided by AI, we can distinguish two different types. The first is weak AI, also known as narrow AI that is designed to perform a narrow task, such as facial recognition or Internet Siri search or self-driving car. Many currently existing systems that claim to use “AI” are likely operating as a weak AI focusing on a narrowly defined specific function. Although this weak AI seems to be helpful to human living, there are still some think weak AI could be dangerous because weak AI could cause disruptions in the electric grid or may damage nuclear power plants when malfunctioned.\n\nThe new development of the long-term goal of many researchers is to create strong AI or artificial general intelligence (AGI) which is the speculative intelligence of a machine that has the capacity to understand or learn any intelligent task human being can, thus assisting human to unravel the confronted problem. While narrow AI may outperform humans such as playing chess or solving equations, but its effect is still weak. AGI, however, could outperform humans at nearly every cognitive task.\n\nStrong AI is a different perception of AI that it can be programmed to actually be a human mind, to be intelligent in whatever it is commanded to attempt, even to have perception, beliefs and other cognitive capacities that are normally only ascribed to humans [4].\n\nIn summary, we can see these different functions of AI [5,6]:\n\nAutomation: What makes a system or process to function automatically\nMachine learning and vision: The science of getting a computer to act through deep learning to predict and analyze, and to see through a camera, analog-to-digital conversion and digital signal processing\nNatural language processing: The processing of human language by a computer program, such as spam detection and converting instantly a language to another to help humans communicate\nRobotics: A field of engineering focusing on the design and manufacturing of cyborgs, the so-called machine man. They are used to perform tasks for human's convenience or something too difficult or dangerous for human to perform and can operate without stopping such as in assembly lines\nSelf-driving car: Use a combination of computer vision, image recognition amid deep learning to build automated control in a vehicle.\nGo to:\nDo human-beings really need artificial intelligence?\nIs AI really needed in human society? It depends. If human opts for a faster and effective way to complete their work and to work constantly without taking a break, yes, it is. However if humankind is satisfied with a natural way of living without excessive desires to conquer the order of nature, it is not. History tells us that human is always looking for something faster, easier, more effective, and convenient to finish the task they work on; therefore, the pressure for further development motivates humankind to look for a new and better way of doing things. Humankind as the homo-sapiens discovered that tools could facilitate many hardships for daily livings and through tools they invented, human could complete the work better, faster, smarter and more effectively. The invention to create new things becomes the incentive of human progress. We enjoy a much easier and more leisurely life today all because of the contribution of technology. The human society has been using the tools since the beginning of civilization, and human progress depends on it. The human kind living in the 21st century did not have to work as hard as their forefathers in previous times because they have new machines to work for them. It is all good and should be all right for these AI but a warning came in early 20th century as the human-technology kept developing that Aldous Huxley warned in his book Brave New World that human might step into a world in which we are creating a monster or a super human with the development of genetic technology.\n\nBesides, up-to-dated AI is breaking into healthcare industry too by assisting doctors to diagnose, finding the sources of diseases, suggesting various ways of treatment performing surgery and also predicting if the illness is life-threatening [7]. A recent study by surgeons at the Children's National Medical Center in Washington successfully demonstrated surgery with an autonomous robot. The team supervised the robot to perform soft-tissue surgery, stitch together a pig's bowel, and the robot finished the job better than a human surgeon, the team claimed [8,9]. It demonstrates robotically-assisted surgery can overcome the limitations of pre-existing minimally-invasive surgical procedures and to enhance the capacities of surgeons performing open surgery."),className:"block max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ",children:(0,a.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900",children:"Scholarly AI Article"})})}),(0,a.jsx)("div",{className:"p-5",children:(0,a.jsx)("button",{onClick:()=>t("Abstract\nArtificial intelligence (AI), known by some as the industrial revolution (IR) 4.0, is going to change not only the way we do things, how we relate to others, but also what we know about ourselves. This article will first examine what AI is, discuss its impact on industrial, social, and economic changes on humankind in the 21st century, and then propose a set of principles for AI bioethics. The IR1.0, the IR of the 18th century, impelled a huge social change without directly complicating human relationships. Modern AI, however, has a tremendous impact on how we do things and also the ways we relate to one another. Facing this challenge, new principles of AI bioethics must be considered and developed to provide guidelines for the AI technology to observe so that the world will be benefited by the progress of this new intelligence.\n\nKeywords: Artificial intelligence, Bioethics, Principles of artificial intelligence bioethics\nGo to:\nWhat is artificial intelligence?\nArtificial intelligence (AI) has many different definitions; some see it as the created technology that allows computers and machines to function intelligently. Some see it as the machine that replaces human labor to work for men a more effective and speedier result. Others see it as “a system” with the ability to correctly interpret external data, to learn from such data, and to use those learnings to achieve specific goals and tasks through flexible adaptation [1].\n\nDespite the different definitions, the common understanding of AI is that it is associated with machines and computers to help humankind solve problems and facilitate working processes. In short, it is an intelligence designed by humans and demonstrated by machines. The term AI is used to describe these functions of human-made tool that emulates the “cognitive” abilities of the natural intelligence of human minds [2].\n\nAlong with the rapid development of cybernetic technology in recent years, AI has been seen almost in all our life circles, and some of that may no longer be regarded as AI because it is so common in daily life that we are much used to it such as optical character recognition or the Siri (speech interpretation and recognition interface) of information searching equipment on computer [3].\n\nGo to:\nDifferent types of artificial intelligence\nFrom the functions and abilities provided by AI, we can distinguish two different types. The first is weak AI, also known as narrow AI that is designed to perform a narrow task, such as facial recognition or Internet Siri search or self-driving car. Many currently existing systems that claim to use “AI” are likely operating as a weak AI focusing on a narrowly defined specific function. Although this weak AI seems to be helpful to human living, there are still some think weak AI could be dangerous because weak AI could cause disruptions in the electric grid or may damage nuclear power plants when malfunctioned.\n\nThe new development of the long-term goal of many researchers is to create strong AI or artificial general intelligence (AGI) which is the speculative intelligence of a machine that has the capacity to understand or learn any intelligent task human being can, thus assisting human to unravel the confronted problem. While narrow AI may outperform humans such as playing chess or solving equations, but its effect is still weak. AGI, however, could outperform humans at nearly every cognitive task.\n\nStrong AI is a different perception of AI that it can be programmed to actually be a human mind, to be intelligent in whatever it is commanded to attempt, even to have perception, beliefs and other cognitive capacities that are normally only ascribed to humans [4].\n\nIn summary, we can see these different functions of AI [5,6]:\n\nAutomation: What makes a system or process to function automatically\nMachine learning and vision: The science of getting a computer to act through deep learning to predict and analyze, and to see through a camera, analog-to-digital conversion and digital signal processing\nNatural language processing: The processing of human language by a computer program, such as spam detection and converting instantly a language to another to help humans communicate\nRobotics: A field of engineering focusing on the design and manufacturing of cyborgs, the so-called machine man. They are used to perform tasks for human's convenience or something too difficult or dangerous for human to perform and can operate without stopping such as in assembly lines\nSelf-driving car: Use a combination of computer vision, image recognition amid deep learning to build automated control in a vehicle.\nGo to:\nDo human-beings really need artificial intelligence?\nIs AI really needed in human society? It depends. If human opts for a faster and effective way to complete their work and to work constantly without taking a break, yes, it is. However if humankind is satisfied with a natural way of living without excessive desires to conquer the order of nature, it is not. History tells us that human is always looking for something faster, easier, more effective, and convenient to finish the task they work on; therefore, the pressure for further development motivates humankind to look for a new and better way of doing things. Humankind as the homo-sapiens discovered that tools could facilitate many hardships for daily livings and through tools they invented, human could complete the work better, faster, smarter and more effectively. The invention to create new things becomes the incentive of human progress. We enjoy a much easier and more leisurely life today all because of the contribution of technology. The human society has been using the tools since the beginning of civilization, and human progress depends on it. The human kind living in the 21st century did not have to work as hard as their forefathers in previous times because they have new machines to work for them. It is all good and should be all right for these AI but a warning came in early 20th century as the human-technology kept developing that Aldous Huxley warned in his book Brave New World that human might step into a world in which we are creating a monster or a super human with the development of genetic technology.\n\nBesides, up-to-dated AI is breaking into healthcare industry too by assisting doctors to diagnose, finding the sources of diseases, suggesting various ways of treatment performing surgery and also predicting if the illness is life-threatening [7]. A recent study by surgeons at the Children's National Medical Center in Washington successfully demonstrated surgery with an autonomous robot. The team supervised the robot to perform soft-tissue surgery, stitch together a pig's bowel, and the robot finished the job better than a human surgeon, the team claimed [8,9]. It demonstrates robotically-assisted surgery can overcome the limitations of pre-existing minimally-invasive surgical procedures and to enhance the capacities of surgeons performing open surgery."),className:"block max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ",children:(0,a.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900",children:"Scholarly AI Article"})})})]}),(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)("h1",{className:"text-md text-black font-mono font-semibold py-5",children:"Playground not available on mobile!"})})]})}}},function(e){e.O(0,[901,407,971,69,744],function(){return e(e.s=5403)}),_N_E=e.O()}]);