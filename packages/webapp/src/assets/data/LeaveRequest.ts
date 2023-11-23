export enum ELeaveRequestStatus {
  APPROVED,
  IN_PROGRESS,
  DECLINED,
}

export enum ELeaveRequestType {
  PATERNAL_LEAVE = "P",
  VACATION = "V",
  SICK = "S",
  HOME_OFFICE = "H",
}

export type TLeaveRequest = {
  id: number;
  status: ELeaveRequestStatus;
  type: ELeaveRequestType;
  paid: boolean;
  startDate: Date;
  endDate: Date;
  deletable: boolean; // State Machine would be necessary, but for mock data we don't care
};

export type TLeaveRequestApproval = TLeaveRequest & {
  requester: string;
};

export const LEAVE_REQUESTS: TLeaveRequest[] = [
  {
    id: 1,
    status: ELeaveRequestStatus.APPROVED,
    type: ELeaveRequestType.VACATION,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    deletable: false,
  },
  {
    id: 2,
    status: ELeaveRequestStatus.IN_PROGRESS,
    type: ELeaveRequestType.SICK,
    paid: true,
    startDate: new Date(),
    endDate: new Date(),
    deletable: true,
  },
  {
    id: 3,
    status: ELeaveRequestStatus.IN_PROGRESS,
    type: ELeaveRequestType.PATERNAL_LEAVE,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 40)),
    deletable: true,
  },
  {
    id: 4,
    status: ELeaveRequestStatus.DECLINED,
    type: ELeaveRequestType.HOME_OFFICE,
    paid: false,
    startDate: new Date(new Date().setDate(new Date().getDate() - 5)),
    endDate: new Date(new Date().setDate(new Date().getDate() - 5)),
    deletable: false,
  },
];

export const LEAVE_REQUEST_FOR_APPROVAL: TLeaveRequestApproval[] = [
  {
    id: 1,
    requester: "Sam Smith",
    status: ELeaveRequestStatus.APPROVED,
    type: ELeaveRequestType.VACATION,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 11)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 13)),
    deletable: false,
  },
  {
    id: 2,
    requester: "Luoshan Rosan Zheng",
    status: ELeaveRequestStatus.IN_PROGRESS,
    type: ELeaveRequestType.SICK,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 8)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 9)),
    deletable: true,
  },
  {
    id: 3,
    requester: "Aghiles Gasselin",
    status: ELeaveRequestStatus.IN_PROGRESS,
    type: ELeaveRequestType.PATERNAL_LEAVE,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 6)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 36)),
    deletable: true,
  },
  {
    id: 4,
    requester: "Michael Kleefisch",
    status: ELeaveRequestStatus.IN_PROGRESS,
    type: ELeaveRequestType.HOME_OFFICE,
    paid: false,
    startDate: new Date(new Date().setDate(new Date().getDate() + 2)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    deletable: false,
  },
];

export const APPROVED_LEAVE_REQUEST: TLeaveRequestApproval[] = [
  {
    id: 1,
    requester: "Sam Smith",
    status: ELeaveRequestStatus.APPROVED,
    type: ELeaveRequestType.VACATION,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 8)),
    deletable: false,
  },
  {
    id: 2,
    requester: "Luoshan Rosan Zheng",
    status: ELeaveRequestStatus.APPROVED,
    type: ELeaveRequestType.SICK,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 13)),
    deletable: true,
  },
  {
    id: 3,
    requester: "Aghiles Gasselin",
    status: ELeaveRequestStatus.APPROVED,
    type: ELeaveRequestType.PATERNAL_LEAVE,
    paid: true,
    startDate: new Date(new Date().setDate(new Date().getDate() + 8)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    deletable: true,
  },
  {
    id: 4,
    requester: "Michael Kleefisch",
    status: ELeaveRequestStatus.APPROVED,
    type: ELeaveRequestType.HOME_OFFICE,
    paid: false,
    startDate: new Date(new Date().setDate(new Date().getDate() + 15)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 20)),
    deletable: false,
  },
];
