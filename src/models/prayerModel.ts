

export interface PrayerModel {
  prayer: string;
  scripture: {
    reference: string;
    text: string;
  };
}

export const prayers: PrayerModel[] = [
  {
    prayer:
      "Heavenly Father, we commit this prayer request into Your loving hands. You see every burden, every silent tear, and every hope behind these words. Let Your peace guard this heart. In Jesus’ name, Amen.",
    scripture: {
      reference: "Psalm 34:17–18 (NIV)",
      text: "The righteous cry out, and the LORD hears them; he delivers them from all their troubles. The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
    },
  },
  {
    prayer:
      "Lord, we bring this request before You trusting in Your goodness. Fill every anxious heart with hope and courage, and may Your Spirit comfort and guide. In Jesus’ name, Amen.",
    scripture: {
      reference: "Isaiah 41:10 (NIV)",
      text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    },
  },
  {
    prayer:
      "Father God, hear this prayer request and let Your will be done in every situation. May Your love and mercy bring healing, restoration, and peace to all who seek You.",
    scripture: {
      reference: "Jeremiah 29:11 (NIV)",
      text: "For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.",
    },
  },
  {
    prayer:
      "Lord Jesus, thank You for hearing this prayer. May Your grace fill hearts with patience, faith, and joy as You answer according to Your perfect timing. Amen.",
    scripture: {
      reference: "Romans 8:28 (NIV)",
      text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    },
  },
  {
    prayer:
      "God of all comfort, we place this prayer request in Your hands. Restore hope, heal brokenness, and let Your light shine in every situation. Amen.",
    scripture: {
      reference: "2 Corinthians 1:3-4 (NIV)",
      text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles.",
    },
  },
  {
    prayer:
      "Heavenly Father, surround this request with Your peace and protection. Let Your Spirit guide, uplift, and strengthen those who have trusted You with this prayer.",
    scripture: {
      reference: "Psalm 121:1-2 (NIV)",
      text: "I lift up my eyes to the mountains—where does my help come from? My help comes from the LORD, the Maker of heaven and earth.",
    },
  },
];
