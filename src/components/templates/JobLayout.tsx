import React from "react";

interface JobLayoutProps {
  job: any;
  relatedJobs: any[];
}

const JobLayout: React.FC<JobLayoutProps> = (props) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <JobContent {...props} />
          <RelatedJobs {...props} />
        </div>
      </div>
    </div>
  );
};

const JobContent: React.FC<JobLayoutProps> = ({ job }) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-balance">
        {job.title}
      </h1>
      <div
        className="space-y-8"
        dangerouslySetInnerHTML={{ __html: job.content }}
      ></div>
    </div>
  );
};

const RelatedJobs: React.FC<JobLayoutProps> = ({ relatedJobs }) => {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted">
          <img
            src="/01.webp"
            alt="Company Award"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-balance">
            CÔNG TY TNHH XÂY DỰNG VÀ CƠ ĐIỆN BÌNH PHÁT
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            TRỤ SỞ CHÍNH : TT7A-9 KĐT mới Đại Kim, P. Định Công, TP. Hà Nội
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Các công việc khác</h3>
        <div className="space-y-4">
          {relatedJobs.map((job) => (
            <div
              key={job.slug}
              className="pb-4 border-b border-border last:border-0 last:pb-0 space-y-2 hover:opacity-70 transition-opacity"
            >
              <a
                className="font-semibold text-sm"
                href={`/tuyen-dung/chi-tiet/#/${job.slug}`}
              >
                {job.title}
              </a>
              <p className="text-xs text-muted-foreground">{job.location}</p>
              <p className="text-xs text-muted-foreground">{job.salary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobLayout;
