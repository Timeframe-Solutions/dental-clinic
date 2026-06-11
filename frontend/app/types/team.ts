export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  credentials?: string[];
  socials?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}
