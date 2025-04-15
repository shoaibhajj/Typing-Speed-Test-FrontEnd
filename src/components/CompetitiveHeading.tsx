const CompetitiveHeading = ({ language }: { language: string }) => {
  const translations = {
    english: "🔥 Can You Out-Type the World? 🌍⚡ Prove It in 60 Seconds! 🕒",
    arabic : "🔥 هل يمكنك التغلب على العالم في الكتابة؟ 🌍⚡ اثبت ذلك في 60 ثانية! 🕒",
    espanish: "🔥 ¿Puedes superar al mundo en velocidad? 🌍⚡ ¡Demuéstralo en 60 segundos! 🕒",
    french: "🔥 Pouvez-vous battre le monde en dactylo ? 🌍⚡ Prouvez-le en 60 secondes ! 🕒",
    dutch: "🔥 Kannst du die Welt im Tippen schlagen? 🌍⚡ Beweise es in 60 Sekunden! 🕒",
    hindi: "🔥 क्या आप दुनिया को टाइपिंग में हरा सकते हैं? 🌍⚡ 60 सेकंड में साबित करो! 🕒",
    japanese: "🔥 世界最速のタイピングができるか？ 🌍⚡ 60秒で証明しよう！ 🕒",
    russian: "🔥 Сможете ли вы печатать быстрее всех в мире? 🌍⚡ Докажите это за 60 секунд! 🕒",
    portuguese: "🔥 Você pode digitar mais rápido que o mundo? 🌍⚡ Prove em 60 segundos! 🕒",
  };

  return (
    <p className="text-xl font-bold text-center py-4 animate-pulse">
      {translations[language as keyof typeof translations] || translations.english}
    </p>
  );
};

export default CompetitiveHeading;
