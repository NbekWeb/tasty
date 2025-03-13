import { Climate_Crisis, Roboto } from "next/font/google";
import "./globals.css";

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  weight: "400",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Tasty Flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Funnel+Display:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${climateCrisis.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
