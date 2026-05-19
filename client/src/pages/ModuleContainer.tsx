import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Slide1Title from "@/components/slides/Slide1Title";
import Slide2Overview from "@/components/slides/Slide2Overview";
import Slide3WhyMatters from "@/components/slides/Slide3WhyMatters";
import Slide4Barriers from "@/components/slides/Slide4Barriers";
import Slide5FormativeAssessment1 from "@/components/slides/Slide5FormativeAssessment1";
import Slide6UDL from "@/components/slides/Slide6UDL";
import Slide7ApplyingUDL from "@/components/slides/Slide7ApplyingUDL";
import Slide8FormativeAssessment2 from "@/components/slides/Slide8FormativeAssessment2";
import Slide9Accessibility from "@/components/slides/Slide9Accessibility";
import Slide10CaseStudy from "@/components/slides/Slide10CaseStudy";
import Slide11FormativeAssessment3 from "@/components/slides/Slide11FormativeAssessment3";
import Slide12SummativeAssessment from "@/components/slides/Slide12SummativeAssessment";
import Slide13Summary from "@/components/slides/Slide13Summary";


const TOTAL_SLIDES = 13;

const slides = [
  { id: 1, component: Slide1Title },
  { id: 2, component: Slide2Overview },
  { id: 3, component: Slide3WhyMatters },
  { id: 4, component: Slide4Barriers },
  { id: 5, component: Slide5FormativeAssessment1 },
  { id: 6, component: Slide6UDL },
  { id: 7, component: Slide7ApplyingUDL },
  { id: 8, component: Slide8FormativeAssessment2 },
  { id: 9, component: Slide9Accessibility },
  { id: 10, component: Slide10CaseStudy },
  { id: 11, component: Slide11FormativeAssessment3 },
  { id: 12, component: Slide12SummativeAssessment },
  { id: 13, component: Slide13Summary },
];

export default function ModuleContainer() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [assessmentScores, setAssessmentScores] = useState<Record<string, any>>({
    formative1: null,
    formative2: null,
    formative3: null,
    summative: null,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Home") setCurrentSlide(1);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleHome = () => {
    setCurrentSlide(1);
  };

  const CurrentSlide = slides[currentSlide - 1].component as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg"></span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Inclusive Assessment Design in K–12 Classrooms</h1>
              <p className="text-sm text-slate-600">Whitney Brown - D299 - Task 1</p>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-700 bg-blue-50 px-4 py-2 rounded-lg">
            Slide {currentSlide} of {TOTAL_SLIDES}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <CurrentSlide
              slideNumber={currentSlide}
              assessmentScores={assessmentScores}
              setAssessmentScores={setAssessmentScores}
            />
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-t border-slate-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Button
            onClick={handlePrev}
            disabled={currentSlide === 1}
            variant="outline"
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>

          <div className="flex gap-2">
            <Button
              onClick={handleHome}
              variant="ghost"
              size="sm"
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          </div>

          <Button
            onClick={handleNext}
            disabled={currentSlide === TOTAL_SLIDES}
            className="gap-2 bg-blue-600 hover:bg-blue-700"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-200">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300"
            style={{ width: `${(currentSlide / TOTAL_SLIDES) * 100}%` }}
          />
        </div>
      </footer>
    </div>
  );
}
