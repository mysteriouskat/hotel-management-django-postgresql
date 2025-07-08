import Header from "@/components/common/Header";
import "./globals.css";
import Slider from "@/components/common/slider";

export const metadata = {
  title: "Hello",
  description: "Made by me!! (~^w^)~",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      <div className="">
        {children} 
      </div>
      </body>
    </html>
  );
}
