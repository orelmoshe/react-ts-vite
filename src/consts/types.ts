export type Image = {
  id: number;
  base64: string;
};

export type ThermographicInspection = {
  testDetails: { id: number; fieldName: string; value: string }[];
  boardsDetails: { id: number; fieldName: string; value: string }[];
  images: Image[];
};

export type ElctricalInspection = {
  testDetails: { id: number; fieldName: string; value: string }[];
  facilityDetails: { id: number; fieldName: string; value: string }[];
  insulationQualityTestResults: { id: number; fieldName: string; value: string }[];
  circuitBreakerTestResults: {
    id: number;
    boardNumber: string;
    boardName: string;
    protectiveCircuitBreakerModel: string;
    measuredTime: string;
    measuredCurrent: string;
    status: string;
  }[];
  defectsToBeRepaired: { id: number; eclipseDetails: string }[];
  images: Image[];
};
