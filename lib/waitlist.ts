export type WaitlistPayload = {
  email: string;
  source?: string;
  created_at: string;
};

export type WaitlistResult =
  | { status: "not_configured"; payload: WaitlistPayload }
  | { status: "invalid_email" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitWaitlistEmail(
  email: string,
  source = "vexis-manifesto",
): Promise<WaitlistResult> {
  const normalizedEmail = email.trim().toLowerCase();

  if (!emailPattern.test(normalizedEmail)) {
    return { status: "invalid_email" };
  }

  return {
    status: "not_configured",
    payload: {
      email: normalizedEmail,
      source,
      created_at: new Date().toISOString(),
    },
  };
}
