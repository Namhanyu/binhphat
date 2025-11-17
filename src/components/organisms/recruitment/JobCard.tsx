import React from "react";

interface JobCardProps {
  title: string;
  salary: string;
  location: string;
  image_url?: string;
  isNew?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  salary,
  location,
  image_url,
  isNew = false,
}) => {
  return (
    <div className="relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      {isNew && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center rounded-md bg-[#48d1a9] text-white font-semibold px-3 py-1 text-sm">
            MỚI
          </span>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="relative w-full md:w-[200px] h-[160px] bg-muted rounded-lg overflow-hidden">
            <img
              src={image_url || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Title and Employment Type */}
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-foreground hover:text-primary cursor-pointer transition-colors">
              {title}
            </h3>
          </div>
          {/* Salary */}
          <div className="text-base text-muted-foreground font-medium">
            {salary}
          </div>
          {/* Location */}
          <div className="text-base text-muted-foreground">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
