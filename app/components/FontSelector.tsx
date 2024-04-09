import { Lexend, Croissant_One, Inter, Nunito } from "next/font/google";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { useCoverFontState } from "@/store/HomePage";
import { useState } from "react";

const lexend = Lexend({ subsets: ["latin"] });
const croissantOne = Croissant_One({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const nunito = Nunito({ weight: "400", subsets: ["latin"] });

const fontList = [
  { label: "Lexend", key: lexend.className },
  { label: "Croissant One", key: croissantOne.className },
  { label: "Inter", key: inter.className },
  { label: "Nunito", key: nunito.className },
];

function FontSelector() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const t = useTranslations("HomePage");

  const { setCoverFont } = useCoverFontState();

  const fontChange = (value: string) => {
    setSelectedFont(value);
    const key = fontList.find((font) => font.label === value)?.key as string;
    setCoverFont(key);
  };

  return (
    <>
      <Select value={selectedFont} onValueChange={fontChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("font")} />
        </SelectTrigger>
        <SelectContent>
          {fontList.map((font) => {
            return (
              <SelectItem key={font.label} value={font.label}>
                {font.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
}

export default FontSelector;
