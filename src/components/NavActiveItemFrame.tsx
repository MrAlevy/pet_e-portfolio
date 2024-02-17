import { generateNavElementId, generateSectionElementId } from "@helpers";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { debounce } from "lodash";

export default function NavActiveItemFrame(props: {
  isProgrammaticScrolling: boolean;
  activeSectionId: string;
  sectionIds: string[];
  setActiveSectionId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const controls = useAnimation();

  const checkActiveSectionOnScroll = debounce(() => {
    if (props.isProgrammaticScrolling) return;
    const scrollPosition = window.scrollY;
    let newActiveSectionId = null;
    for (let sectionId of props.sectionIds) {
      const sectionElement = document.getElementById( generateSectionElementId({ sectionId }));
      if (sectionElement) {
        const { top, bottom, y } = sectionElement.getBoundingClientRect();
        console.log("top", top, "bottom", bottom, "y", y, "scrollPosition", scrollPosition, "sectionId", sectionId);
        if (top <= 500 && bottom >= 0) {
          newActiveSectionId = sectionId;
          break;
        }
      }
    }

    if (newActiveSectionId && newActiveSectionId !== props.activeSectionId) {
      props.setActiveSectionId(newActiveSectionId);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', checkActiveSectionOnScroll);
    return () => {
      window.removeEventListener('scroll', checkActiveSectionOnScroll);
    };
  }, [checkActiveSectionOnScroll]);

  useEffect(() => {
    debounce(() => {
      if (document) {
        const element = document
          .getElementById(
            generateNavElementId({ sectionId: props.activeSectionId }),
          )
          ?.getBoundingClientRect();

        controls.start({
          top: (element?.y || 0) - (element?.height || 0) / 2 - 6,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 20,
          },
        });
      }
    }, 150);
  }, [controls, props.activeSectionId]);

  const setActiveSectionIdDebounced = debounce((newActiveSectionId) => {
    props.setActiveSectionId(newActiveSectionId);
  }, 150);

  useEffect(() => {
    if (props.isProgrammaticScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) {
          const newActiveSectionId = activeEntry.target.id.split("-")[2];
          setActiveSectionIdDebounced(newActiveSectionId);

          const rect = document
            .getElementById(
              generateNavElementId({ sectionId: newActiveSectionId }),
            )
            ?.getBoundingClientRect();

          if (rect) {
            controls.start({
              top: rect.y - rect.height / 2 - 6,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 20,
              },
            });
          }
        }
      },
      { threshold: [0.2], rootMargin: "250px" },
    );

    props.sectionIds.forEach((sectionId) => {
      const element = document.getElementById(
        generateSectionElementId({ sectionId }),
      );
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [props, controls, setActiveSectionIdDebounced]);

  return (
    <motion.div
      style={{
        height: 30,
        width: "255px",
        position: "absolute",
        left: "-40%",
        padding: "19px 10px",
        backgroundColor: "rgba(164, 255, 239, 0.38)",
        zIndex: 20,
        borderRadius: "30px",
        boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.75)",
      }}
      initial={{ top: "7rem" }}
      animate={controls}
    />
  );
}
