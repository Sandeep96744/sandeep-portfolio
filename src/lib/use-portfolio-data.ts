import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db, isFirebaseConfigured } from "./firebase";
import {
  profile as seedProfile,
  experiences as seedExperiences,
  projects as seedProjects,
  skills as seedSkills,
  education as seedEducation,
  certifications as seedCertifications,
  interests as seedInterests,
  type Profile,
  type Experience,
  type Project,
  type Skill,
  type Education,
  type Certification,
  type Interest,
} from "./portfolio-data";

/**
 * Generic loader: attempts Firestore first, falls back to seed data if
 * Firebase isn't configured or the collection is empty.
 */
async function fetchOrFallback<T>(
  collectionName: string,
  fallback: T[],
  orderField?: string,
): Promise<T[]> {
  if (!isFirebaseConfigured || !db) return fallback;
  try {
    const ref = orderField
      ? query(collection(db, collectionName), orderBy(orderField))
      : collection(db, collectionName);
    const snap = await getDocs(ref);
    if (snap.empty) return fallback;
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as T);
  } catch (err) {
    console.warn(`[portfolio] firestore "${collectionName}" failed, using seed`, err);
    return fallback;
  }
}

export const useProfile = () =>
  useQuery<Profile>({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!isFirebaseConfigured || !db) return seedProfile;
      try {
        const snap = await getDocs(collection(db, "profile"));
        if (snap.empty) return seedProfile;
        return { ...seedProfile, ...(snap.docs[0].data() as Profile) };
      } catch {
        return seedProfile;
      }
    },
    initialData: seedProfile,
  });

export const useExperiences = () =>
  useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: () => fetchOrFallback("experiences", seedExperiences, "start"),
    initialData: seedExperiences,
  });

export const useProjects = () =>
  useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: () => fetchOrFallback("projects", seedProjects),
    initialData: seedProjects,
  });

export const useSkills = () =>
  useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: () => fetchOrFallback("skills", seedSkills),
    initialData: seedSkills,
  });

export const useEducation = () =>
  useQuery<Education[]>({
    queryKey: ["education"],
    queryFn: () => fetchOrFallback("education", seedEducation),
    initialData: seedEducation,
  });

export const useCertifications = () =>
  useQuery<Certification[]>({
    queryKey: ["certifications"],
    queryFn: () => fetchOrFallback("certifications", seedCertifications),
    initialData: seedCertifications,
  });

export const useInterests = () =>
  useQuery<Interest[]>({
    queryKey: ["interests"],
    queryFn: () => fetchOrFallback("interests", seedInterests),
    initialData: seedInterests,
  });
