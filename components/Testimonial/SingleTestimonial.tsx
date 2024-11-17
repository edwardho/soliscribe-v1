import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-background p-9 pt-7.5 shadow-sm border border-border">
      <div className="mb-7.5 flex justify-between border-b border-border pb-6">
        <div>
          <h3 className="mb-1.5 text-lg font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-muted-foreground">{designation}</p>
        </div>
        <Image width={60} height={50} className="rounded-full" src={image} alt={name} />
      </div>

      <p className="text-foreground">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
