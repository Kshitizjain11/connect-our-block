const SectionDivider = () => {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background px-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-secondary rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;