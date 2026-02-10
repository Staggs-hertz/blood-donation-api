const compatibilityMap = {
  "O-": ["O-"],
  "0+": ["O-", "O+"],
  "A-": ["O-", "A-"],
  "A+": ["O-", "O+", "A-", "A+"],
  "B-": ["O-", "B-"],
  "B+": ["O-", "O+", "B-", "B+"],
  "AB-": ["O-", "A-", "B-", "AB-"],
  "AB+": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
};

export const canDonate = (donorType, recipientType) => {
  return compatibilityMap[recipientType]?.includes(donorType) ?? false;
};

export const getCompatibleDonors = (recipientType) => {
  return compatibilityMap[recipientType] ?? [];
};
