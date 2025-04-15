import React, { SetStateAction } from "react";

const languages = [
  { name: "Afrikaans", code: "AF", flag: "🇿🇦" },
  { name: "Albanian", code: "SQ", flag: "🇦🇱" },
  { name: "Arabic", code: "AR", flag: "🇸🇦" },
  { name: "Bengali", code: "BN", flag: "🇧🇩" },
  { name: "Bulgarian", code: "BG", flag: "🇧🇬" },
  { name: "Catalan", code: "CA", flag: "🇪🇸" },
  { name: "Chinese", code: "ZH", flag: "🇨🇳" },
  { name: "Croatian", code: "HR", flag: "🇭🇷" },
  { name: "Czech", code: "CS", flag: "🇨🇿" },
  { name: "Danish", code: "DA", flag: "🇩🇰" },
  { name: "Dutch", code: "NL", flag: "🇳🇱" },
  { name: "English", code: "EN", flag: "🇬🇧" },
  { name: "Esperanto", code: "EO", flag: "🌍" },
  { name: "Estonian", code: "ET", flag: "🇪🇪" },
  { name: "Farsi", code: "FA", flag: "🇮🇷" },
  { name: "Finnish", code: "FI", flag: "🇫🇮" },
  { name: "French", code: "FR", flag: "🇫🇷" },
  { name: "German", code: "DE", flag: "🇩🇪" },
  { name: "Greek", code: "EL", flag: "🇬🇷" },
  { name: "Hebrew", code: "HE", flag: "🇮🇱" },
  { name: "Hindi", code: "HI", flag: "🇮🇳" },
  { name: "Hungarian", code: "HU", flag: "🇭🇺" },
  { name: "Indonesian", code: "ID", flag: "🇮🇩" },
  { name: "Italian", code: "IT", flag: "🇮🇹" },
  { name: "Japanese", code: "JA", flag: "🇯🇵" },
  { name: "Kazakh", code: "KK", flag: "🇰🇿" },
  { name: "Korean", code: "KO", flag: "🇰🇷" },
  { name: "Lithuanian", code: "LT", flag: "🇱🇹" },
  { name: "Latvian", code: "LV", flag: "🇱🇻" },
  { name: "Macedonian", code: "MK", flag: "🇲🇰" },
  { name: "Norwegian", code: "NO", flag: "🇳🇴" },
  { name: "Polish", code: "PL", flag: "🇵🇱" },
  { name: "Portuguese", code: "PT", flag: "🇵🇹" },
  { name: "Romanian", code: "RO", flag: "🇷🇴" },
  { name: "Russian", code: "RU", flag: "🇷🇺" },
  { name: "Slovak", code: "SK", flag: "🇸🇰" },
  { name: "Slovenian", code: "SL", flag: "🇸🇮" },
  { name: "Spanish", code: "ES", flag: "🇪🇸" },
  { name: "Swedish", code: "SV", flag: "🇸🇪" },
  { name: "Thai", code: "TH", flag: "🇹🇭" },
  { name: "Turkish", code: "TR", flag: "🇹🇷" },
  { name: "Ukrainian", code: "UK", flag: "🇺🇦" },
  { name: "Vietnamese", code: "VI", flag: "🇻🇳" },
];
interface IProp {
  onChange: (e: { target: { value: SetStateAction<string> } }) => void;
  selectedLanguage: string;
}
const LanguageSelector = ({ selectedLanguage, onChange }: IProp) => (
  <select
    value={selectedLanguage}
    onChange={onChange}
    className="bg-[#18181a] text-white p-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:ring-2 focus:ring-[#61a5f4] mb-4"
  >
    <option value="">🌐 Select Language</option>
    {languages.map((lang) => (
      <option key={lang.code} value={lang.name.toLowerCase()}>
        {lang.flag} {lang.code} {lang.name}
      </option>
    ))}
  </select>
);

export default LanguageSelector;
