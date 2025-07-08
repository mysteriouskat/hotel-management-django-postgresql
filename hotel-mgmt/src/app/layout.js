import Header from "@/components/common/header";

export const metadata = {
  title: "Hello",
  description: "Made by me!! (~^w^)~",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
       {children} 
      </body>
    </html>
  );
}
