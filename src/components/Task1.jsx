import React, { useEffect, useState, useRef } from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Data = [
  {
    id: 0,
    image:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
    title: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
  },
  {
    id: 1,
    image:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
    title: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
  },
  {
    id: 2,
    image:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
    title: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
  },
  {
    id: 3,
    image:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
    title: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
  },
];

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [positionTop, setPositionTop] = useState(0);

  const boxRef = useRef(null);

  useEffect(() => {
    let timeout = null;

    const handleScroll = () => {
      const boxOffsetTop = boxRef.current.offsetTop;
      const boxHeight = boxRef.current.offsetHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollBottom = scrollTop + windowHeight;
      setPositionTop(scrollTop);

      if (scrollTop >= boxOffsetTop && scrollTop <= boxOffsetTop + boxHeight) {
        if (count !== 3) {
          setIsSticky(true);
          clearTimeout(timeout);
          timeout = setTimeout(increaseCount, 500);
        }
      } else if (scrollTop < boxOffsetTop) {
        if (count !== 0) {
          setIsSticky(false);
          clearTimeout(timeout);
          timeout = setTimeout(decreaseCount, 500);
        }
      } else if (scrollBottom >= boxOffsetTop + boxHeight && count !== 3) {
        setIsSticky(true);
        clearTimeout(timeout);
        timeout = setTimeout(increaseCount, 500);
      } else {
        setIsSticky(false);
      }
    };

    const increaseCount = () => {
      setCount((prevCount) => (prevCount + 1) % Data.length);
    };

    const decreaseCount = () => {
      setCount((prevCount) => (prevCount - 1 + Data.length) % Data.length);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [count]);

  console.log("positionTop", positionTop);
  console.log("Count", count);

  return (
    <div>
      <Box>
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg"
          alt="House"
        />
      </Box>
      <Flex
        ref={boxRef}
        width="100%"
        display="flex"
        background="#101010"
        position={isSticky ? (count === 3 ? "relative" : "sticky") : "relative"}
        top={0}
      >
        <Box>
          {Data.map((ele) => (
            <Box key={ele.id} width="70%" padding="100px">
              <Heading color="white" fontSize="65px">
                {ele.title}
              </Heading>
              <Text color="white" fontSize="20px">
                {ele.description}
              </Text>
            </Box>
          ))}
        </Box>
        <Box
          width="50%"
          height="100vh"
          position="sticky"
          top={0}
          display="flex"
          justifyContent="center"
        marginRight="150px"
        >
          <Box
            display="flex"
            justifyContent="center"
            background="#1b1b1b"
            borderRadius="20px"
            alignItems="center"
            width="330px"
            height="90%"
            margin="auto"
            border="1px solid #1b1b1b"
            overflow="hidden"
          >
            <Box
              background="#101010"
              height="95%"
              borderRadius="20px"
              margin="auto"
              width="93%"
              overflow="hidden"
              border="1px solid #1b1b1b"
               position="relative"
            >

<Image
  src={
    positionTop >= 0 && positionTop <= 893
      ? Data[0].image
      : positionTop >= 893 && positionTop <= 1400
      ? Data[1].image
      : positionTop >= 1400 && positionTop <= 1900
      ? Data[2].image
      : positionTop >= 1900 && positionTop <= 3500
      ? Data[3].image
      : "Hello"
  }
  alt="Feature"
  style={{
    position: "absolute",
    top: 0,
    
    left:
      positionTop >= 0 && positionTop <= 800
        ? "0%":
        positionTop >= 800 && positionTop <= 893
        ? "-50%"
        
        : positionTop >= 893 && positionTop <= 993
        ? "50%"
        : positionTop >= 993 && positionTop <= 1400
        ? "0%"
        : positionTop >= 1400 && positionTop <= 1500
        ? "-50%"
        : positionTop >= 1500 && positionTop <= 1600
        ? "50%"
        : positionTop >= 1600 && positionTop <= 1800
        ? "0%"
        : positionTop >= 1800 && positionTop <= 1850
        ? "-50%"
        : positionTop >= 1850 && positionTop <= 1930
        ? "50%"
        : positionTop >= 1930 && positionTop <= 3500
        ? "0%"
        // : positionTop >= 3400 && positionTop <= 3500
        // ? "-50%"
        : "0%",
    transition: "left 0.5s ease",
    width: "100%",
    height: "100%",
  }}
/>



              {/* <Image
        
                src={
                  positionTop >= 0 && positionTop <= 1093
                    ? Data[0].image
                    : positionTop >= 1093 && positionTop <= 2000
                    ? Data[1].image
                    : positionTop >= 2000 && positionTop <= 2500
                    ? Data[2].image
                    : positionTop >= 2500 && positionTop <= 3500
                    ? Data[3].image
                    : "Hello"
                }
                alt="Feature"
              /> */}
            </Box>
          </Box>
        </Box>
      </Flex>

      <Flex
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="https://www.shutterstock.com/image-vector/vector-illustration-cool-detailed-red-260nw-94498447.jpg"
          alt="Illustration"
        />
      </Flex>
    </div>
  );
};

export default Task1;
