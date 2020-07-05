export interface Car {
    make?: string;
    model?: string;
    primaryColour?: string;
    motExpiryDate?: string; // This is a string because that's what the API returns
    odometerValue?: number;
    odometerUnit?: string;
};