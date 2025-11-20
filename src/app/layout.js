import "./globals.css";


export const metadata = {
  title: "Portfolio",
  description: "My website portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Aldrich&family=Archivo+Black&family=Audiowide&family=Black+Ops+One&family=Cal+Sans&family=Cormorant:ital,wght@0,300..700;1,300..700&family=Emblema+One&family=Fascinate&family=Fugaz+One&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Krona+One&family=Lemon&family=My+Soul&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Paytone+One&family=Playwrite+DK+Loopet:wght@100..400&family=Rowdies:wght@300;400;700&family=Russo+One&family=Saira+Stencil+One&family=Tagesschrift&family=Tektur:wght@400..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Ysabeau+SC:wght@1..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
