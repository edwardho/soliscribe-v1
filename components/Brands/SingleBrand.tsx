import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;
  const { theme } = useTheme();

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <Image
          className={cn(
            "transition-all duration-300 hover:opacity-100",
            theme === "dark" ? "hidden" : "opacity-65"
          )}
          src={image}
          alt={name}
          fill
        />
        <Image
          className={cn(
            "transition-all duration-300 hover:opacity-100",
            theme === "dark" ? "opacity-50" : "hidden"
          )}
          src={imageLight}
          alt={name}
          fill
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
