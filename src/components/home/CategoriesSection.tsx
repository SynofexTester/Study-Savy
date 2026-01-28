import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Stethoscope, 
  Scale, 
  Briefcase, 
  GraduationCap, 
  Trophy 
} from "lucide-react";

const categories = [
  {
    name: "Engineering",
    icon: Cpu,
    count: "2,500+ notes",
    color: "bg-primary/10 text-primary",
    slug: "engineering",
  },
  {
    name: "Medical",
    icon: Stethoscope,
    count: "1,800+ notes",
    color: "bg-red-100 text-red-600",
    slug: "medical",
  },
  {
    name: "Law",
    icon: Scale,
    count: "900+ notes",
    color: "bg-amber-100 text-amber-600",
    slug: "law",
  },
  {
    name: "Business",
    icon: Briefcase,
    count: "2,100+ notes",
    color: "bg-blue-100 text-blue-600",
    slug: "business",
  },
  {
    name: "O/A Levels",
    icon: GraduationCap,
    count: "1,500+ notes",
    color: "bg-green-100 text-green-600",
    slug: "o-a-levels",
  },
  {
    name: "Competitive Exams",
    icon: Trophy,
    count: "1,200+ notes",
    color: "bg-orange-100 text-orange-600",
    slug: "competitive-exams",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find notes perfectly tailored to your field of study
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/browse?category=${category.slug}`}
                className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-foreground text-center mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
