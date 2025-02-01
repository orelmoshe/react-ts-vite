import { ElctricalInspection, ThermographicInspection } from './types';

export const initialThermographicData: ThermographicInspection = {
  testDetails: [
    { id: 0, fieldName: 'שם המתקן', value: '' },
    { id: 1, fieldName: 'תאריך הבדיקה', value: '' },
    { id: 2, fieldName: 'כתובת המתקן', value: '' },
    { id: 3, fieldName: 'שם מלווה הבדיקה', value: '' },
    { id: 4, fieldName: 'טלפון מלווה המתקן', value: '' },
  ],
  boardsDetails: [
    {
      id: 0,
      fieldName: '',
      value: '',
    },
  ],
  images: [],
};

export const initalElctricalValue: ElctricalInspection = {
  testDetails: [
    { id: 0, fieldName: 'שם המתקן', value: '' },
    { id: 1, fieldName: 'תאריך הבדיקה', value: '' },
    { id: 2, fieldName: 'תאריך בדיקה קודמת', value: '' },
    { id: 3, fieldName: 'כתובת המתקן', value: '' },
  ],
  facilityDetails: [
    { id: 0, fieldName: 'גודל חיבור , מתחי הזנה', value: '' },
    { id: 1, fieldName: 'מקור הזנה סוג מקור ההזנה', value: '' },
    { id: 2, fieldName: 'כמות פנלים ', value: '' },
    { id: 3, fieldName: 'הספק פנל', value: '' },
    { id: 4, fieldName: 'הספק כללי', value: '' },
    { id: 5, fieldName: 'תקינות פנלים סולאריים', value: '' },
    { id: 6, fieldName: 'גישה לגג ולפנלים הסולאריים', value: '' },
    { id: 7, fieldName: 'סוג הלוח ומיקומו פיזית (לא במקום רטוב)', value: '' },
    { id: 8, fieldName: 'דגם מפסק ראשי', value: '' },
    { id: 9, fieldName: 'התנגדות לולאת התקלה', value: '' },
    { id: 10, fieldName: 'LT התנגדות יסוד ביחס ללוח חשמל ראשי', value: '' },
    { id: 11, fieldName: 'התנגדות בידוד 250 קילו ישן 1.5 מגה חדש', value: '' },
    { id: 12, fieldName: 'בדיקת רציפות שקעים', value: '' },
    { id: 13, fieldName: 'המצאות פס השוואת פוטנציאלים 3CI', value: '' },
    { id: 14, fieldName: 'הארקת ממיר וגופי מתכת', value: '' },
    { id: 15, fieldName: 'הארקת קונסטרוקציה', value: '' },
    { id: 16, fieldName: 'מערכת גילוי עשן /אש בלוח 3*60 עשן 3*80 אש', value: '' },
    { id: 17, fieldName: 'התאמת שטחי חתך מוליכים והצבע שלהם', value: '' },
    { id: 18, fieldName: 'שטח חתך חוט הארקה ראשי לפס השוואת פוטנציאלים', value: '' },
  ],
  insulationQualityTestResults: [
    { id: 0, fieldName: 'ערך הבדדה בין פאזות  R-S', value: '' },
    { id: 1, fieldName: 'ערך הבדדה בין פאזות  R-T', value: '' },
    { id: 2, fieldName: 'ערך הבדדה בין פאזות  T-S', value: '' },
    { id: 3, fieldName: 'ערך הבדדה בין  R-N', value: '' },
    { id: 4, fieldName: 'ערך הבדדה בין  S-N', value: '' },
    { id: 5, fieldName: 'ערך הבדדה בין  T-N', value: '' },
    { id: 6, fieldName: 'ערך הבדדה בין  R-PE', value: '' },
    { id: 7, fieldName: 'ערך הבדדה בין  S-PE', value: '' },
    { id: 8, fieldName: 'ערך הבדדה בין  T-PE', value: '' },
  ],
  circuitBreakerTestResults: [
    {
      id: 0,
      boardNumber: 'ראשי',
      boardName: 'ראשי',
      protectiveCircuitBreakerModel: 'FH202A',
      measuredTime: '',
      measuredCurrent: '25.6',
      status: 'כן',
    },
  ],
  defectsToBeRepaired: [{ id: 1, eclipseDetails: '' }],
  images: [],
};
