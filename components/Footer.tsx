import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-neo-green py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-black uppercase mb-2">Jai Samyukth B U</h2>
          <p className="font-mono text-gray-400">Applied Software Systems.</p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <a href="https://github.com/JaiSamyukth" target="_blank" rel="noopener noreferrer" className="hover:text-neo-green transition-colors font-bold uppercase underline decoration-2">GitHub</a>
          <a href="https://linkedin.com/in/jaisamyukth" target="_blank" rel="noopener noreferrer" className="hover:text-neo-pink transition-colors font-bold uppercase underline decoration-2">LinkedIn</a>
          <a href="https://x.com/JaiSamyukth17" target="_blank" rel="noopener noreferrer" className="hover:text-neo-blue transition-colors font-bold uppercase underline decoration-2">X/Twitter</a>
          <a href="mailto:jaisamyukth@gmail.com" className="hover:text-neo-yellow transition-colors font-bold uppercase underline decoration-2">Email</a>
        </div>

        <div className="text-right">
          <p className="font-mono text-xs text-gray-500">© {new Date().getFullYear()} / NEO-BRUTALISM V1</p>
          <p className="font-mono text-xs text-gray-500">DEPLOYED TO PROD</p>
        </div>
      </div>
    </footer>
  );
};
