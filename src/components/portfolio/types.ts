export type DevArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
  social_image: string;
};

export type DevProfile = {
  name: string;
  username: string;
  profile_image: string;
};

export type Capability = {
  area: string;
  title: string;
  description: string;
  technologies: string[];
};
