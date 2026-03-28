import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, Upload } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const ContactSection = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-24 space-y-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Reach Out To Us</span>
        </div>
        <ScrollFloat
          containerClassName="text-center"
          textClassName="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
        >
          GET IN TOUCH
        </ScrollFloat>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 mx-auto rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto w-full">
        {/* Contact Info Column */}
        <div className="space-y-8">
          <div className="bg-[#0c0d10] border border-white/5 rounded-[3rem] p-8 sm:p-12 space-y-10 shadow-2xl">
            <div className="flex gap-8 items-start group">
              <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Phone className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">Call Us</span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tighter">+91 91507 60720</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tighter">+91 96001 87328</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-white/5"></div>

            <div className="flex gap-8 items-start group">
              <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Mail className="w-8 h-8" />
              </div>
              <div className="space-y-2 overflow-hidden">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">Email Us</span>
                <p className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tighter truncate">arunwinauto@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0c0d10] border border-white/5 rounded-[3rem] p-12 space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Head Office</span>
              </div>
              <p className="text-xl font-bold text-white/60 leading-relaxed uppercase">
                Chennai, Tamil Nadu, <br /> India – 600 001
              </p>
            </div>
          </div>

          <div className="bg-[#0c0d10] border border-white/5 rounded-[3rem] p-12 space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Warehouse</span>
              </div>
              <p className="text-xl font-bold text-white/60 leading-relaxed uppercase">
                Win Auto Warehouse, <br /> Chennai Industrial Hub
              </p>
            </div>
          </div>

          <div className="bg-[#0c0d10] border border-white/5 rounded-[3rem] p-12 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.4)]"></div>
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Business Hours</span>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-bold text-white/60 uppercase tracking-tight">
                Mon – Sat • <span className="text-white">9:00 AM – 6:30 PM</span>
              </p>
              <p className="text-lg font-bold text-white/30 uppercase tracking-tight">
                Sunday • Closed
              </p>
            </div>
          </div>
        </div>

        {/* Message Form Column */}
        <div className="bg-[#0c0d10] border border-white/5 rounded-[4rem] p-12 lg:p-20 shadow-2xl space-y-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <h3 className="text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none relative z-10">
            SEND US A <br /> MESSAGE
          </h3>

          <form
            action="https://formsubmit.co/arvind31102003@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="space-y-10 relative z-10"
          >
            <div className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4 group/field">
                  <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] leading-none group-focus-within/field:text-blue-500 transition-colors">
                    First Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    name="FirstName"
                    type="text"
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white text-lg font-medium placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                    required
                  />
                </div>
                <div className="space-y-4 group/field">
                  <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] leading-none group-focus-within/field:text-blue-500 transition-colors">
                    Last Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    name="LastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white text-lg font-medium placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4 group/field">
                <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] leading-none group-focus-within/field:text-blue-500 transition-colors">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  name="Email"
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white text-lg font-medium placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                  required
                />
              </div>

              <div className="space-y-4 group/field">
                <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] leading-none">
                  Your Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  name="Message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white text-lg font-medium placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Attachment Section */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] leading-none">
                  Attachment <span className="text-white/30 text-[8px] tracking-widest">(Optional)</span>
                </label>
                <div className="relative group/upload">
                  <input
                    name="Attachment"
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div className="w-full border-2 border-dashed border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center justify-center gap-4 bg-white/[0.02] group-hover/upload:border-blue-500/50 group-hover/upload:bg-white/[0.05] transition-all duration-500">
                    <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center group-hover/upload:scale-110 transition-transform duration-500">
                      <Upload className="w-8 h-8" />
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-white font-bold uppercase tracking-widest text-sm">
                        {fileName || 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
                        {fileName ? `File selected: ${fileName}` : 'SVG, PNG, JPG or GIF (max. 5MB)'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.4em] py-8 rounded-[2.5rem] flex items-center justify-center gap-4 transition-all duration-500 transform hover:scale-[1.02] shadow-[0_20px_40px_rgba(37,99,235,0.3)]">
              Send Message
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
