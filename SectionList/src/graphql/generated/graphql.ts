import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal128: any;
  JSON: any;
};

export type Address = {
  __typename?: 'Address';
  _id: Scalars['String'];
  address: Scalars['String'];
  blockchain: BlockchainType;
  isWithdrawing: Scalars['Boolean'];
};

export type AffiliateTree = {
  __typename?: 'AffiliateTree';
  downlineUser?: Maybe<User>;
  level: Scalars['Float'];
  me?: Maybe<User>;
  toUserId: Scalars['String'];
  userId: Scalars['String'];
};

export enum ApproveWithdrawAction {
  Approve = 'APPROVE',
  Hold = 'HOLD',
  Reject = 'REJECT',
}

export type ApproveWithdrawInput = {
  action: ApproveWithdrawAction;
  note?: InputMaybe<Scalars['String']>;
  /** User ID */
  withdrawId: Scalars['String'];
};

export type BalanceBlockchains = {
  __typename?: 'BalanceBlockchains';
  bsc?: Maybe<Scalars['Decimal128']>;
  tron?: Maybe<Scalars['Decimal128']>;
};

export type BanUserInput = {
  id: Scalars['String'];
  isBanned: Scalars['Boolean'];
};

export enum BlockChainResult {
  Failed = 'Failed',
  Success = 'Success',
}

export enum BlockChainStatus {
  Confirmed = 'Confirmed',
  Unconfirmed = 'Unconfirmed',
}

export enum BlockchainType {
  Bsc = 'BSC',
  Tron = 'TRON',
}

export type ChangePasswordInput = {
  /** current password */
  currentPassword: Scalars['String'];
  /** new password */
  newPassword: Scalars['String'];
};

export type Commission = {
  __typename?: 'Commission';
  _id: Scalars['String'];
  /** Commission amount in PYROC */
  amount?: Maybe<Scalars['Decimal128']>;
  commissionDate: Scalars['DateTime'];
  /** Commission rate */
  commissionPercent?: Maybe<Scalars['Float']>;
  /** any data */
  data?: Maybe<Scalars['JSON']>;
  /** Level in aff */
  level: Scalars['Int'];
  /** Package ID */
  packageId: Scalars['String'];
  sponsor?: Maybe<User>;
  /** Commission to user ID */
  toUserId: Scalars['String'];
  user?: Maybe<User>;
  /** User ID */
  userId: Scalars['String'];
  userPackage?: Maybe<UserPackage>;
  /** User Package ID */
  userPackageId: Scalars['String'];
};

export type CommissionConfig = {
  __typename?: 'CommissionConfig';
  level: Scalars['Int'];
  /** commission percent */
  percent: Scalars['Float'];
};

export type CommissionConfigInput = {
  level: Scalars['Int'];
  /** commission percent */
  percent: Scalars['Float'];
};

export type CreateMintTokenInput = {
  amount: Scalars['Decimal128'];
  tokenSymbol: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreatePackageInput = {
  /** Limit of commission amount is added to user */
  commissionAmountLimit: Scalars['Decimal128'];
  /** Duration in months */
  duration?: InputMaybe<Scalars['Int']>;
  /** Active or not */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Name of package */
  name: Scalars['String'];
  /** Price of package in USDT */
  price: Scalars['Decimal128'];
  /** Profit rate percent */
  profit?: InputMaybe<Scalars['Float']>;
};

export type CreateSaleInput = {
  endAt: Scalars['String'];
  /** Maximum Pyroc user can buy */
  maxAmount: Scalars['Decimal128'];
  /** Minimum Pyroc user need to buy */
  minAmount: Scalars['Decimal128'];
  /** Name of Sale */
  name: Scalars['String'];
  /** Price of 1 Pyroc in USDT */
  price: Scalars['Decimal128'];
  releasePlan: Array<SaleReleasePlanInput>;
  startAt: Scalars['String'];
  /** Total Pyroc can be bought */
  totalSupply: Scalars['Decimal128'];
  /** Type of Sale */
  type: SaleType;
};

export type CreateTokenInput = {
  decimals: Scalars['Float'];
  feeWithdraw: Scalars['Decimal128'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  maxWithdraw: Scalars['Decimal128'];
  minDeposit: Scalars['Decimal128'];
  minWithdraw: Scalars['Decimal128'];
  name: Scalars['String'];
  rate: Scalars['Float'];
  symbol: Scalars['String'];
  tokenBlockchains: TokenBlockchainsInput;
};

export type CreateWithdrawInput = {
  /** withdraw to address */
  address: Scalars['String'];
  /** amount to withdraw */
  amountWithdraw: Scalars['Decimal128'];
  /** code from email */
  code: Scalars['String'];
  /** code id from register request */
  codeId: Scalars['String'];
  tokenBlockchain: TokenType;
  tokenSymbol: Scalars['String'];
};

export type DailyStatistics = {
  __typename?: 'DailyStatistics';
  date: Scalars['String'];
  pyroc: Scalars['Decimal128'];
};

export type Deposit = {
  __typename?: 'Deposit';
  _id: Scalars['String'];
  amount: Scalars['Decimal128'];
  createdAt: Scalars['DateTime'];
  fromBlockchain: BlockchainType;
  result: BlockChainResult;
  status: BlockChainStatus;
  toAddress: Scalars['String'];
  tokenSymbol: Scalars['String'];
  tokenType: TokenType;
  transactionHash: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type DepositHistoryFilter = {
  /** Deposited date from (GMT Timestamp in miliseconds) */
  depositedDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Deposited date before (GMT Timestamp in miliseconds) */
  depositedDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<BlockChainStatus>;
};

export type DepositHistoryInput = {
  filter?: InputMaybe<DepositHistoryFilter>;
  pagination: NumericPaginationBaseInput;
};

export type DepositRes = {
  __typename?: 'DepositRes';
  data: Array<Deposit>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type FilterInternalTransactionInput = {
  /** Transacted date from (GMT Timestamp in miliseconds) */
  transactedDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Transacted date before (GMT Timestamp in miliseconds) */
  transactedDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InternalTransactionType>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type FilterTransactionHistoryInput = {
  /** Transacted date from (GMT Timestamp in miliseconds) */
  transactedDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Transacted date before (GMT Timestamp in miliseconds) */
  transactedDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InternalTransactionType>;
};

export type FilterUserInput = {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  isBanned?: InputMaybe<Scalars['Boolean']>;
  roles?: InputMaybe<Array<Role>>;
};

export type FindPackageInput = {
  /** Package ID */
  packageId: Scalars['String'];
};

export type FindSaleInput = {
  saleId: Scalars['String'];
};

export type FindUserWalletInput = {
  /** User ID */
  userId: Scalars['String'];
};

export type GetCommissionsFilter = {
  /** Commission date start from (GMT Timestamp in miliseconds) */
  commissionDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Commission date start before (GMT Timestamp in miliseconds) */
  commissionDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  levelFilterLowerBound?: InputMaybe<Scalars['Int']>;
  levelFilterUpperBound?: InputMaybe<Scalars['Int']>;
  sponsorEmail?: InputMaybe<Scalars['String']>;
  sponsorFullName?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
  userFullName?: InputMaybe<Scalars['String']>;
};

export type GetCommissionsInput = {
  filter?: InputMaybe<GetCommissionsFilter>;
  pagination: NumericPaginationBaseInput;
};

export type GetCommissionsRes = {
  __typename?: 'GetCommissionsRes';
  data: Array<Commission>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type GetDailyChartInput = {
  /** Daily chart start from (GMT Timestamp in milliseconds) */
  dailyChartDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Daily chart start before (GMT Timestamp in milliseconds) */
  dailyChartDateFilterUpperBound?: InputMaybe<Scalars['String']>;
};

export type GetDepositsFilter = {
  /** Deposited date from */
  depositedDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Deposited date before */
  depositedDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  fromBlockchain?: InputMaybe<BlockchainType>;
  status?: InputMaybe<BlockChainStatus>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type GetDepositsInput = {
  filter?: InputMaybe<GetDepositsFilter>;
  pagination: NumericPaginationBaseInput;
};

export type GetInternalTransactionsInput = {
  filter?: InputMaybe<FilterInternalTransactionInput>;
  pagination: NumericPaginationBaseInput;
};

export type GetMainWalletBalanceInput = {
  blockchain: BlockchainType;
  tokenSymbol: Scalars['String'];
  walletType: MainWalletType;
};

export type GetMintTokensFilter = {
  createdById?: InputMaybe<Scalars['ID']>;
  /** Mint tokens date from (GMT Timestamp in milliseconds) */
  mintTokensDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Mint tokens date before (GMT Timestamp in milliseconds) */
  mintTokensDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type GetMintTokensInput = {
  filter?: InputMaybe<GetMintTokensFilter>;
  pagination: NumericPaginationBaseInput;
};

export type GetMyCommissionsFilter = {
  /** Commission date start from (GMT Timestamp in miliseconds) */
  commissionDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Commission date start before (GMT Timestamp in miliseconds) */
  commissionDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  levelFilterLowerBound?: InputMaybe<Scalars['Int']>;
  levelFilterUpperBound?: InputMaybe<Scalars['Int']>;
  userEmail?: InputMaybe<Scalars['String']>;
  userFullName?: InputMaybe<Scalars['String']>;
};

export type GetMyCommissionsInput = {
  filter?: InputMaybe<GetMyCommissionsFilter>;
  pagination: NumericPaginationBaseInput;
};

export type GetMyDownlineFilter = {
  downlineUserEmail?: InputMaybe<Scalars['String']>;
  downlineUserFullName?: InputMaybe<Scalars['String']>;
  levelFilterLowerBound?: InputMaybe<Scalars['Int']>;
  levelFilterUpperBound?: InputMaybe<Scalars['Int']>;
};

export type GetMyDownlineInput = {
  filter?: InputMaybe<GetMyDownlineFilter>;
  pagination: NumericPaginationBaseInput;
};

export type GetMyDownlineRes = {
  __typename?: 'GetMyDownlineRes';
  data: Array<AffiliateTree>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type GetOneUserWalletBlockchainFilter = {
  blockchain?: InputMaybe<BlockchainType>;
  email?: InputMaybe<Scalars['String']>;
  tokenAbbr?: InputMaybe<Array<Scalars['String']>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GetPackagesInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type GetRecentNewUserInput = {
  pagination?: InputMaybe<NumericPaginationBaseInput>;
};

export type GetSaleCmsInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<SaleType>;
};

export type GetSalesInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type GetTokenInput = {
  symbol: Scalars['String'];
};

export type GetUserDetailInput = {
  userId: Scalars['String'];
};

export type GetUsersInput = {
  filter?: InputMaybe<FilterUserInput>;
  pagination: NumericPaginationBaseInput;
};

export type GetUsersWalletBlockchainFilter = {
  blockchain?: InputMaybe<BlockchainType>;
  email?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
  tokenAbbr?: InputMaybe<Array<Scalars['String']>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GetUsersWalletBlockchainInput = {
  filter?: InputMaybe<GetUsersWalletBlockchainFilter>;
  pagination: NumericPaginationBaseInput;
};

export type GetWithdrawsFilter = {
  address?: InputMaybe<Scalars['String']>;
  fromBlockchain?: InputMaybe<BlockchainType>;
  statuses?: InputMaybe<Array<WithdrawStatus>>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
  /** Withdrawal date from (GMT Timestamp in milliseconds) */
  withdrawalDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Withdrawal date before (GMT Timestamp in milliseconds) */
  withdrawalDateFilterUpperBound?: InputMaybe<Scalars['String']>;
};

export type GetWithdrawsInput = {
  filter?: InputMaybe<GetWithdrawsFilter>;
  pagination: NumericPaginationBaseInput;
};

export type IndexDepositsInput = {
  blockFrom: Scalars['Int'];
  blockTo: Scalars['Int'];
  blockchain: BlockchainType;
  tokenSymbol: Scalars['String'];
};

export type Interest = {
  __typename?: 'Interest';
  _id: Scalars['String'];
  paymentDate: Scalars['DateTime'];
  status: InterestStatus;
  user?: Maybe<User>;
  /** User ID */
  userId: Scalars['String'];
  userPackage?: Maybe<UserPackage>;
  /** User-package ID */
  userPackageId: Scalars['String'];
};

export type InterestPaymentPlanFilter = {
  /** User email */
  email?: InputMaybe<Scalars['String']>;
  /** User fullname */
  fullName?: InputMaybe<Scalars['String']>;
  /** Package ID */
  packageId?: InputMaybe<Scalars['String']>;
  /** Payment date start from (GMT Timestamp in miliseconds) */
  paymentDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Payment date start before (GMT Timestamp in miliseconds) */
  paymentDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  /** User package ID */
  userPackageId?: InputMaybe<Scalars['String']>;
};

export type InterestPaymentPlanInput = {
  filter?: InputMaybe<InterestPaymentPlanFilter>;
  pagination: NumericPaginationBaseInput;
};

export type InterestPaymentPlanRes = {
  __typename?: 'InterestPaymentPlanRes';
  data: Array<Interest>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export enum InterestStatus {
  Paid = 'PAID',
  Unpaid = 'UNPAID',
}

export type InternalTransaction = {
  __typename?: 'InternalTransaction';
  _id: Scalars['String'];
  /** amount */
  amount?: Maybe<Scalars['Decimal128']>;
  createdAt: Scalars['DateTime'];
  /** lock balance */
  lock?: Maybe<Scalars['Decimal128']>;
  /** note */
  note?: Maybe<Scalars['String']>;
  /** target deposit id, user pack .... */
  targetId: Scalars['ID'];
  tokenInfo?: Maybe<Token>;
  /** tokenSymbol */
  tokenSymbol?: Maybe<Scalars['String']>;
  /** type transaction */
  type: InternalTransactionType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export enum InternalTransactionType {
  Commission = 'Commission',
  Deposit = 'Deposit',
  MinusWithdrawFee = 'MinusWithdrawFee',
  PackageCapital = 'PackageCapital',
  PackageInterest = 'PackageInterest',
  RegisterPackage = 'RegisterPackage',
  RegisterSale = 'RegisterSale',
  RequestRegisterSale = 'RequestRegisterSale',
  RequestWithdraw = 'RequestWithdraw',
  RequestWithdrawCompleted = 'RequestWithdrawCompleted',
  RequestWithdrawRejected = 'RequestWithdrawRejected',
  Transfer = 'Transfer',
  UnlockSale = 'UnlockSale',
  Withdraw = 'Withdraw',
}

export type InternalTransactionsResponse = {
  __typename?: 'InternalTransactionsResponse';
  data: Array<InternalTransaction>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type IsSaleBoughtInput = {
  saleId: Scalars['String'];
};

export type Jwt = {
  __typename?: 'JWT';
  accessToken: Scalars['String'];
  expiresAt: Scalars['Float'];
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['Float'];
  user?: Maybe<User>;
};

export type LoginWithEmailInput = {
  /** Version of mobile app */
  appVersion: Scalars['String'];
  /** Unique id for device */
  deviceId: Scalars['String'];
  /** firebase device token */
  deviceToken?: InputMaybe<Scalars['String']>;
  /** Login by email */
  email: Scalars['String'];
  /** Password */
  password: Scalars['String'];
};

export enum MainWalletType {
  MainReceiveWallet = 'MAIN_RECEIVE_WALLET',
  MainTransferWallet = 'MAIN_TRANSFER_WALLET',
}

export type MintToken = {
  __typename?: 'MintToken';
  _id: Scalars['String'];
  amount: Scalars['Decimal128'];
  createdAt: Scalars['DateTime'];
  createdById: Scalars['String'];
  creator?: Maybe<User>;
  tokenSymbol: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type MintTokenRes = {
  __typename?: 'MintTokenRes';
  data: Array<MintToken>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Only FS can do this */
  approveWithdraw: Scalars['Boolean'];
  banUser: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  createPackage: Package;
  /** Only admin can do this */
  createSale: Sale;
  createToken: Token;
  /** Only user can do this */
  createWithdraw: Withdraw;
  /** Index blockchain */
  indexDeposits: Scalars['Boolean'];
  loginWithEmail: Jwt;
  logout: Scalars['Boolean'];
  mintToken: Scalars['Boolean'];
  /** only role FS */
  recallAllTokenToSystem: Scalars['Boolean'];
  /** only role FS */
  recallTokenToSystem: Scalars['Boolean'];
  /** Refresh token */
  refreshToken: Jwt;
  /** Only user can do this */
  registerPackage: UserPackage;
  /** Only user can do this */
  registerSale: UserSale;
  /** Register with email */
  registerWithEmail: Jwt;
  /** Only admin can do this */
  removePackage: Scalars['Boolean'];
  /** Only admin can do this */
  removeSale: Scalars['Boolean'];
  /** Only user can do this */
  requestRegisterPackage: RequestRegisterPackage;
  /** Only user can do this */
  requestRegisterSale: RequestRegisterSale;
  /** User request create account by email. If account be able to create a code will be sent and submit by registerWithEmail mutation */
  requestRegisterWithEmail: RegisterByEmail;
  requestResetPassword: RequestResetPassword;
  /** Only user can do this */
  requestWithdraw: RequestWithdraw;
  resetPassword: Scalars['Boolean'];
  setSponsor: Scalars['Boolean'];
  /** Only admin can do this */
  updateCommissionsConfig: Setting;
  /** Only admin can do this */
  updatePackage: Scalars['Boolean'];
  updateProfile: Scalars['Boolean'];
  /** Only admin can do this */
  updateSale: Scalars['Boolean'];
  updateToken: Scalars['Boolean'];
  updateUserRoles: Scalars['Boolean'];
  updateUserSalesPermission: Scalars['Boolean'];
  verifyOTPResetPassword: VerifiedOtpResetPassword;
};

export type MutationApproveWithdrawArgs = {
  input: ApproveWithdrawInput;
};

export type MutationBanUserArgs = {
  input: BanUserInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreatePackageArgs = {
  input: CreatePackageInput;
};

export type MutationCreateSaleArgs = {
  input: CreateSaleInput;
};

export type MutationCreateTokenArgs = {
  input: CreateTokenInput;
};

export type MutationCreateWithdrawArgs = {
  input: CreateWithdrawInput;
};

export type MutationIndexDepositsArgs = {
  input: IndexDepositsInput;
};

export type MutationLoginWithEmailArgs = {
  input: LoginWithEmailInput;
};

export type MutationMintTokenArgs = {
  input: CreateMintTokenInput;
};

export type MutationRecallAllTokenToSystemArgs = {
  input: RecallAllTokenInput;
};

export type MutationRecallTokenToSystemArgs = {
  input: RecallTokenInput;
};

export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};

export type MutationRegisterPackageArgs = {
  input: RegisterPackageInput;
};

export type MutationRegisterSaleArgs = {
  input: RegisterSaleInput;
};

export type MutationRegisterWithEmailArgs = {
  input: RegisterWithEmailInput;
};

export type MutationRemovePackageArgs = {
  input: RemovePackageInput;
};

export type MutationRemoveSaleArgs = {
  input: RemoveSaleInput;
};

export type MutationRequestRegisterPackageArgs = {
  input: RequestRegisterPackageInput;
};

export type MutationRequestRegisterSaleArgs = {
  input: RequestRegisterSaleInput;
};

export type MutationRequestRegisterWithEmailArgs = {
  input: RequestRegisterWithEmailInput;
};

export type MutationRequestResetPasswordArgs = {
  input: RequestResetPasswordWithEmailInput;
};

export type MutationRequestWithdrawArgs = {
  input: RequestWithdrawInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordWithEmailInput;
};

export type MutationSetSponsorArgs = {
  input: SetUserSponsorInput;
};

export type MutationUpdateCommissionsConfigArgs = {
  input: UpdateCommissionsConfigInput;
};

export type MutationUpdatePackageArgs = {
  input: UpdatePackageInput;
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUpdateSaleArgs = {
  input: UpdateSaleInput;
};

export type MutationUpdateTokenArgs = {
  input: UpdateTokenInput;
};

export type MutationUpdateUserRolesArgs = {
  input: UpdateUserRolesInput;
};

export type MutationUpdateUserSalesPermissionArgs = {
  input: UpdateUserSalesPermissionInput;
};

export type MutationVerifyOtpResetPasswordArgs = {
  input: VerifyOtpResetPasswordInput;
};

export type NumericPaginationBase = {
  __typename?: 'NumericPaginationBase';
  /** Current page of result */
  currentPage?: Maybe<Scalars['Int']>;
  /** Limit of result */
  limit?: Maybe<Scalars['Int']>;
  /** Total page of result */
  totalPage?: Maybe<Scalars['Int']>;
};

export type NumericPaginationBaseInput = {
  /** Current page of result */
  currentPage?: InputMaybe<Scalars['Int']>;
  /** Limit of result */
  limit?: InputMaybe<Scalars['Int']>;
  /** No pagination on this query */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
};

export type OverviewDailyChart = {
  __typename?: 'OverviewDailyChart';
  interest?: Maybe<Array<DailyStatistics>>;
  package?: Maybe<Array<DailyStatistics>>;
  privateSale?: Maybe<Array<DailyStatistics>>;
  seedingSale?: Maybe<Array<DailyStatistics>>;
  total?: Maybe<Array<DailyStatistics>>;
};

export type OverviewDashboard = {
  __typename?: 'OverviewDashboard';
  /** Total active packages in the system */
  totalActivePackages?: Maybe<Scalars['Int']>;
  /** Total users have been banned */
  totalBannedUsers?: Maybe<Scalars['Int']>;
  /** Total blockchain Pyroc is still in the system */
  totalBlockchainPyroc?: Maybe<Scalars['Decimal128']>;
  /** Total blockchain USDT is still in the system */
  totalBlockchainUSDT?: Maybe<Scalars['Decimal128']>;
  /** Total USDT has been deposited */
  totalDepositedPyroc?: Maybe<Scalars['Decimal128']>;
  /** Total USDT has been deposited */
  totalDepositedUSDT?: Maybe<Scalars['Decimal128']>;
  /** Total package registrations in this month */
  totalPackageRegistrationsThisMonth?: Maybe<Scalars['Int']>;
  /** Total packages in the system */
  totalPackages?: Maybe<Scalars['Int']>;
  /** Total remain users need to be paid interest this month */
  totalRemainedUsersNeededToBePaidThisMonth?: Maybe<Scalars['Int']>;
  /** Total sold blockchain Pyroc from Private sale */
  totalSoldPrivateSale?: Maybe<RevenueSale>;
  /** Total sold blockchain Pyroc from Seeding sale */
  totalSoldSeedingSale?: Maybe<RevenueSale>;
  /** Total users in the system */
  totalUsers?: Maybe<Scalars['Int']>;
  /** Total Pyroc has been withdrawn */
  totalWithdrawnPyroc?: Maybe<Scalars['Decimal128']>;
  /** Total USDT has been withdrawn */
  totalWithdrawnUSDT?: Maybe<Scalars['Decimal128']>;
};

export type Package = {
  __typename?: 'Package';
  _id: Scalars['String'];
  /** Amount of PYROC */
  amount?: Maybe<Scalars['Decimal128']>;
  /** Limit of commission amount is added to user */
  commissionAmountLimit?: Maybe<Scalars['Decimal128']>;
  /** User create the package */
  createdBy?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  /** any data */
  data?: Maybe<Scalars['JSON']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Duration of package */
  duration?: Maybe<Scalars['Int']>;
  /** Is active or not */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Name of package */
  name?: Maybe<Scalars['String']>;
  /** Price In USDT */
  price?: Maybe<Scalars['Decimal128']>;
  /** Profit rate percent */
  profit?: Maybe<Scalars['Float']>;
  /** User update the package */
  updatedBy?: Maybe<Scalars['String']>;
  updater?: Maybe<User>;
};

export type PackageHistoryInput = {
  pagination: NumericPaginationBaseInput;
};

export type PackageHistoryRes = {
  __typename?: 'PackageHistoryRes';
  data: Array<UserPackage>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Only user can do this */
  depositHistory: DepositRes;
  getAllToken: Array<Token>;
  /** Only CMS can do this */
  getCommissions: GetCommissionsRes;
  getCommissionsConfig: Setting;
  /** Only CMS can do this */
  getDeposits: DepositRes;
  /** Only CMS can do this */
  getInterestPaymentPlan: InterestPaymentPlanRes;
  getInternalTransactions?: Maybe<InternalTransactionsResponse>;
  /** only role CMS */
  getMainBalanceBNB: SystemWalletBalance;
  /** only role CMS */
  getMainWalletBalance?: Maybe<SystemWalletBalance>;
  getMinTokens: MintTokenRes;
  /** Only FS can do this */
  getOneUserWalletBlockchain?: Maybe<UserWalletBlockchainResponse>;
  getOverviewDailyChart: OverviewDailyChart;
  getOverviewDashboard: OverviewDashboard;
  getRecentNewUser?: Maybe<UsersRes>;
  getToken: Token;
  getTotalTokens?: Maybe<Array<TotalToken>>;
  /** Only CMS can do this */
  getUnlockSalePlan: UnlockSalePlanRes;
  getUserDetail: User;
  /** Only user can do this */
  getUserInterestPaymentPlan: InterestPaymentPlanRes;
  /** Only user can do this */
  getUserUnlockSalePlan: UnlockSalePlanRes;
  /** Only CMS can do this */
  getUserWallet?: Maybe<UserWalletResponse>;
  getUsers: UsersRes;
  /** Only admin can do this */
  getUsersRegisteredPackage: UsersRegisteredPackageRes;
  /** Only CMS can do this */
  getUsersRegisteredSale: UserRegisteredSalesRes;
  /** Only FS can do this */
  getUsersWalletBlockchain?: Maybe<UserWalletBlockchainResponse>;
  /** Only CMS can do this */
  getWithdraws: WithdrawRes;
  /** Only admin can do this */
  isSaleBought: Scalars['Boolean'];
  me: User;
  myDownline: GetMyDownlineRes;
  myReceivedCommissions: GetCommissionsRes;
  myWallet: UserWalletResponse;
  package: Package;
  /** Only user can do this */
  packageHistory: PackageHistoryRes;
  packages: Array<Package>;
  privateSale: Sale;
  privateSales: Array<Sale>;
  /** only role FS */
  recoverUserWalletBalance?: Maybe<Scalars['Boolean']>;
  sale: Sale;
  /** Only user can do this */
  saleHistory: SaleHistoryRes;
  sales: Array<Sale>;
  seedingSale: Sale;
  seedingSales: Array<Sale>;
  /** only role CMS */
  systemWalletHistory: SystemWalletRes;
  transactionHistory?: Maybe<InternalTransactionsResponse>;
  /** Only user can do this */
  withdrawalHistory: WithdrawRes;
};

export type QueryDepositHistoryArgs = {
  input: DepositHistoryInput;
};

export type QueryGetCommissionsArgs = {
  input: GetCommissionsInput;
};

export type QueryGetDepositsArgs = {
  input: GetDepositsInput;
};

export type QueryGetInterestPaymentPlanArgs = {
  input: InterestPaymentPlanInput;
};

export type QueryGetInternalTransactionsArgs = {
  input: GetInternalTransactionsInput;
};

export type QueryGetMainWalletBalanceArgs = {
  input: GetMainWalletBalanceInput;
};

export type QueryGetMinTokensArgs = {
  input: GetMintTokensInput;
};

export type QueryGetOneUserWalletBlockchainArgs = {
  filter?: InputMaybe<GetOneUserWalletBlockchainFilter>;
};

export type QueryGetOverviewDailyChartArgs = {
  input: GetDailyChartInput;
};

export type QueryGetRecentNewUserArgs = {
  input: GetRecentNewUserInput;
};

export type QueryGetTokenArgs = {
  input: GetTokenInput;
};

export type QueryGetUnlockSalePlanArgs = {
  input: UnlockSalePlanInput;
};

export type QueryGetUserDetailArgs = {
  input: GetUserDetailInput;
};

export type QueryGetUserInterestPaymentPlanArgs = {
  input: UserInterestPaymentPlanInput;
};

export type QueryGetUserUnlockSalePlanArgs = {
  input: UserUnlockSalePlanInput;
};

export type QueryGetUserWalletArgs = {
  input: FindUserWalletInput;
};

export type QueryGetUsersArgs = {
  input: GetUsersInput;
};

export type QueryGetUsersRegisteredPackageArgs = {
  input: UsersRegisteredPackageInput;
};

export type QueryGetUsersRegisteredSaleArgs = {
  input: UserRegisteredSaleInput;
};

export type QueryGetUsersWalletBlockchainArgs = {
  input: GetUsersWalletBlockchainInput;
};

export type QueryGetWithdrawsArgs = {
  input: GetWithdrawsInput;
};

export type QueryIsSaleBoughtArgs = {
  input: IsSaleBoughtInput;
};

export type QueryMyDownlineArgs = {
  input: GetMyDownlineInput;
};

export type QueryMyReceivedCommissionsArgs = {
  input: GetMyCommissionsInput;
};

export type QueryPackageArgs = {
  input: FindPackageInput;
};

export type QueryPackageHistoryArgs = {
  input: PackageHistoryInput;
};

export type QueryPackagesArgs = {
  input?: InputMaybe<GetPackagesInput>;
};

export type QueryPrivateSaleArgs = {
  input: FindSaleInput;
};

export type QueryPrivateSalesArgs = {
  input: GetSalesInput;
};

export type QueryRecoverUserWalletBalanceArgs = {
  input: RecoverUserWalletBalanceInput;
};

export type QuerySaleArgs = {
  input: FindSaleInput;
};

export type QuerySaleHistoryArgs = {
  input: SaleHistoryInput;
};

export type QuerySalesArgs = {
  input: GetSaleCmsInput;
};

export type QuerySeedingSaleArgs = {
  input: FindSaleInput;
};

export type QuerySeedingSalesArgs = {
  input: GetSalesInput;
};

export type QuerySystemWalletHistoryArgs = {
  input: SystemWalletHistoryInput;
};

export type QueryTransactionHistoryArgs = {
  input: TransactionHistoryInput;
};

export type QueryWithdrawalHistoryArgs = {
  input: WithdrawalHistoryInput;
};

export type RecallAllTokenInput = {
  /** token symbol */
  blockchain: BlockchainType;
  /** min balance in user wallet */
  minBalance?: InputMaybe<Scalars['String']>;
  /** token symbol */
  tokenSymbol: Scalars['String'];
};

export type RecallTokenInput = {
  /** token symbol */
  blockchain: BlockchainType;
  /** token symbol */
  tokenSymbol: Scalars['String'];
  /** userId */
  userId: Scalars['String'];
};

export type RecoverUserWalletBalanceInput = {
  blockchain: BlockchainType;
  tokenSymbol: Scalars['String'];
  userId: Scalars['String'];
};

export type RefreshTokenInput = {
  /** Refresh token */
  refreshToken: Scalars['String'];
};

export type RegisterByEmail = {
  __typename?: 'RegisterByEmail';
  codeId: Scalars['String'];
  email: Scalars['String'];
  expiresAt: Scalars['Float'];
};

export type RegisterPackageInput = {
  /** code from email */
  code: Scalars['String'];
  /** code id from register request */
  codeId: Scalars['String'];
  /** Package ID */
  packageId: Scalars['String'];
};

export type RegisterSaleInput = {
  /** Amount of Pyroc want to buy */
  amount: Scalars['Decimal128'];
  /** code from email */
  code: Scalars['String'];
  /** code id from register request */
  codeId: Scalars['String'];
  saleId: Scalars['String'];
};

export type RegisterWithEmailInput = {
  /** code from email */
  code: Scalars['String'];
  /** code id from register request */
  codeId: Scalars['String'];
  /** Unique id for device */
  deviceId: Scalars['String'];
  /** Login by email */
  email: Scalars['String'];
  /** Full name */
  fullName: Scalars['String'];
  /** Password */
  password: Scalars['String'];
};

export type RemovePackageInput = {
  /** Package ID */
  packageId: Scalars['ID'];
};

export type RemoveSaleInput = {
  saleId: Scalars['String'];
};

export type RequestRegisterPackage = {
  __typename?: 'RequestRegisterPackage';
  codeId: Scalars['String'];
  expiresAt: Scalars['Float'];
  packageId: Scalars['String'];
  userId: Scalars['String'];
};

export type RequestRegisterPackageInput = {
  /** PackageID */
  packageId: Scalars['String'];
};

export type RequestRegisterSale = {
  __typename?: 'RequestRegisterSale';
  codeId: Scalars['String'];
  expiresAt: Scalars['Float'];
  saleId: Scalars['String'];
  userId: Scalars['String'];
};

export type RequestRegisterSaleInput = {
  saleId: Scalars['String'];
};

export type RequestRegisterWithEmailInput = {
  /** Login by email */
  email: Scalars['String'];
};

export type RequestResetPassword = {
  __typename?: 'RequestResetPassword';
  codeId: Scalars['String'];
  email: Scalars['String'];
  expiresAt: Scalars['Float'];
};

export type RequestResetPasswordWithEmailInput = {
  /** Email */
  email: Scalars['String'];
};

export type RequestWithdraw = {
  __typename?: 'RequestWithdraw';
  address: Scalars['String'];
  /** amount to withdraw */
  amountWithdraw: Scalars['String'];
  codeId: Scalars['String'];
  expiresAt: Scalars['Float'];
  tokenBlockchain: TokenType;
  tokenSymbol: Scalars['String'];
  userId: Scalars['String'];
};

export type RequestWithdrawInput = {
  /** withdraw to address */
  address: Scalars['String'];
  /** amount to withdraw */
  amountWithdraw: Scalars['Decimal128'];
  tokenBlockchain: TokenType;
  tokenSymbol: Scalars['String'];
};

export type ResetPasswordWithEmailInput = {
  /** code from email */
  code: Scalars['String'];
  /** code id from register request */
  codeId: Scalars['String'];
  /** Email */
  email: Scalars['String'];
  /** New Password */
  password: Scalars['String'];
};

export type RevenueSale = {
  __typename?: 'RevenueSale';
  /** Revenues from Total sold */
  revenues?: Maybe<Scalars['Decimal128']>;
  /** Total sold blockchain Pyroc */
  totalSold?: Maybe<Scalars['Decimal128']>;
};

export enum Role {
  Admin = 'Admin',
  Finance = 'Finance',
  Staff = 'Staff',
  User = 'User',
}

export type Sale = {
  __typename?: 'Sale';
  _id: Scalars['String'];
  /** User create the sale */
  createdBy?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  endAt?: Maybe<Scalars['DateTime']>;
  /** Is active or not */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Maximum Pyroc an user can buy in this sale */
  maxAmount?: Maybe<Scalars['Decimal128']>;
  /** Minimum Pyroc user need to buy */
  minAmount?: Maybe<Scalars['Decimal128']>;
  /** Name of Sale */
  name?: Maybe<Scalars['String']>;
  /** Price of 1 Pyroc in USDT */
  price?: Maybe<Scalars['Decimal128']>;
  releasePlan?: Maybe<Array<SaleReleasePlan>>;
  startAt?: Maybe<Scalars['DateTime']>;
  /** Total Pyroc has been bought */
  totalSold?: Maybe<Scalars['Decimal128']>;
  /** Total Pyroc can be bought */
  totalSupply?: Maybe<Scalars['Decimal128']>;
  /** Type of Sale */
  type?: Maybe<SaleType>;
  /** User update the sale */
  updatedBy?: Maybe<Scalars['String']>;
  updater?: Maybe<User>;
};

export type SaleHistoryInput = {
  pagination: NumericPaginationBaseInput;
};

export type SaleHistoryRes = {
  __typename?: 'SaleHistoryRes';
  data: Array<UserSale>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type SaleReleasePlan = {
  __typename?: 'SaleReleasePlan';
  month: Scalars['Int'];
  rate: Scalars['Float'];
};

export type SaleReleasePlanInput = {
  month: Scalars['Int'];
  rate: Scalars['Float'];
};

export enum SaleType {
  PrivateSale = 'PRIVATE_SALE',
  SeedingSale = 'SEEDING_SALE',
}

export type SetUserSponsorInput = {
  /** Sponsor ID or sponsor email */
  sponsorInfo: Scalars['String'];
};

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['String'];
  /** commissions config */
  commissions?: Maybe<Array<CommissionConfig>>;
  type: SettingType;
  /** User update the setting */
  updatedBy?: Maybe<Scalars['String']>;
  updater?: Maybe<User>;
};

export enum SettingType {
  SettingConfigCommissions = 'SETTING_CONFIG_COMMISSIONS',
  Type = 'type',
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SystemWalletBalance = {
  __typename?: 'SystemWalletBalance';
  address: Scalars['String'];
  balance: Scalars['String'];
  blockchain: BlockchainType;
  tokenSymbol: Scalars['String'];
  walletType: MainWalletType;
};

export type SystemWalletHistoryFilter = {
  blockChainResult?: InputMaybe<BlockChainResult>;
  blockchain?: InputMaybe<BlockchainType>;
  blockchainStatus?: InputMaybe<BlockChainStatus>;
  systemWallet?: InputMaybe<Scalars['String']>;
  /** System wallet date from (GMT Timestamp in milliseconds) */
  systemWalletDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** System wallet date before (GMT Timestamp in milliseconds) */
  systemWalletDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type SystemWalletHistoryInput = {
  filter?: InputMaybe<SystemWalletHistoryFilter>;
  pagination: NumericPaginationBaseInput;
};

export type SystemWalletLogs = {
  __typename?: 'SystemWalletLogs';
  _id: Scalars['String'];
  amount: Scalars['String'];
  blockChainResult?: Maybe<BlockChainResult>;
  blockchain: BlockchainType;
  blockchainStatus?: Maybe<BlockChainStatus>;
  createdAt: Scalars['DateTime'];
  systemWallet: Scalars['String'];
  tokenSymbol: Scalars['String'];
  transactionHash: Scalars['String'];
  user?: Maybe<User>;
  userWallet: Scalars['String'];
};

export type SystemWalletRes = {
  __typename?: 'SystemWalletRes';
  data: Array<SystemWalletLogs>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type Token = {
  __typename?: 'Token';
  _id: Scalars['String'];
  decimals: Scalars['Float'];
  /** default 2 USDT */
  feeWithdraw: Scalars['Decimal128'];
  isActive: Scalars['Boolean'];
  logo?: Maybe<Scalars['String']>;
  maxWithdraw: Scalars['Decimal128'];
  minDeposit: Scalars['Decimal128'];
  minWithdraw: Scalars['Decimal128'];
  name: Scalars['String'];
  /** rate with USDT */
  rate: Scalars['Float'];
  symbol: Scalars['String'];
  tokenBlockchains: TokenBlockchains;
};

export type TokenBlockchain = {
  __typename?: 'TokenBlockchain';
  address: Scalars['String'];
  allowDeposit: Scalars['Boolean'];
  allowWithdraw: Scalars['Boolean'];
};

export type TokenBlockchainInput = {
  address: Scalars['String'];
  allowDeposit?: InputMaybe<Scalars['Boolean']>;
  allowWithdraw?: InputMaybe<Scalars['Boolean']>;
};

export type TokenBlockchainPermissions = {
  allowDeposit?: InputMaybe<Scalars['Boolean']>;
  allowWithdraw?: InputMaybe<Scalars['Boolean']>;
};

export type TokenBlockchains = {
  __typename?: 'TokenBlockchains';
  bep20?: Maybe<TokenBlockchain>;
  trc20?: Maybe<TokenBlockchain>;
};

export type TokenBlockchainsInput = {
  bep20?: InputMaybe<TokenBlockchainInput>;
  trc20?: InputMaybe<TokenBlockchainInput>;
};

export type TokenBlockchainsPermissions = {
  bep20?: InputMaybe<TokenBlockchainPermissions>;
  trc20?: InputMaybe<TokenBlockchainPermissions>;
};

export enum TokenType {
  Bep20 = 'BEP20',
  Trc20 = 'TRC20',
}

export type TotalToken = {
  __typename?: 'TotalToken';
  available: Scalars['String'];
  lock: Scalars['String'];
  tokenSymbol: Scalars['String'];
  total: Scalars['String'];
};

export type TransactionHistoryInput = {
  filter?: InputMaybe<FilterTransactionHistoryInput>;
  pagination: NumericPaginationBaseInput;
};

export type UnlockSale = {
  __typename?: 'UnlockSale';
  _id: Scalars['String'];
  /** Amount unlock from sale */
  amount?: Maybe<Scalars['Decimal128']>;
  /** The month tokens will be unlocked from the day registered sale */
  month?: Maybe<Scalars['Int']>;
  /** Unlock rate percent */
  rate?: Maybe<Scalars['Float']>;
  status: UnlockSaleStatus;
  /** Type of Sale */
  type?: Maybe<SaleType>;
  unlockDate: Scalars['DateTime'];
  user?: Maybe<User>;
  /** User ID */
  userId: Scalars['String'];
  userSale?: Maybe<UserSale>;
  /** User-package ID */
  userSaleId: Scalars['String'];
};

export type UnlockSalePlanFilter = {
  /** User email */
  email?: InputMaybe<Scalars['String']>;
  /** User fullname */
  fullName?: InputMaybe<Scalars['String']>;
  /** Sale ID */
  saleId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UnlockSaleStatus>;
  /** Payment date start from (GMT Timestamp in miliseconds) */
  unlockDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Payment date start before (GMT Timestamp in miliseconds) */
  unlockDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  /** User ID */
  userId?: InputMaybe<Scalars['String']>;
  /** User sale ID */
  userSaleId?: InputMaybe<Scalars['String']>;
};

export type UnlockSalePlanInput = {
  filter?: InputMaybe<UnlockSalePlanFilter>;
  pagination: NumericPaginationBaseInput;
};

export type UnlockSalePlanRes = {
  __typename?: 'UnlockSalePlanRes';
  data: Array<UnlockSale>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export enum UnlockSaleStatus {
  Lock = 'LOCK',
  Unlock = 'UNLOCK',
}

export type UpdateCommissionsConfigInput = {
  commissions?: InputMaybe<Array<CommissionConfigInput>>;
};

export type UpdatePackageInput = {
  /** Limit of commission amount is added to user */
  commissionAmountLimit?: InputMaybe<Scalars['Decimal128']>;
  /** Duration in months */
  duration?: InputMaybe<Scalars['Int']>;
  /** Active or not */
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Name of package */
  name?: InputMaybe<Scalars['String']>;
  /** Package ID */
  packageId: Scalars['ID'];
  /** Price of package in USDT */
  price?: InputMaybe<Scalars['Decimal128']>;
  /** Profit rate percent */
  profit?: InputMaybe<Scalars['Float']>;
};

export type UpdateProfileInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type UpdateSaleInput = {
  endAt?: InputMaybe<Scalars['String']>;
  /** Maximum Pyroc user can buy */
  maxAmount?: InputMaybe<Scalars['Decimal128']>;
  /** Minimum Pyroc user need to buy */
  minAmount?: InputMaybe<Scalars['Decimal128']>;
  /** Name of Sale */
  name?: InputMaybe<Scalars['String']>;
  /** Price of 1 Pyroc in USDT */
  price?: InputMaybe<Scalars['Decimal128']>;
  releasePlan?: InputMaybe<Array<SaleReleasePlanInput>>;
  saleId: Scalars['String'];
  startAt?: InputMaybe<Scalars['String']>;
  /** Total Pyroc can be bought */
  totalSupply?: InputMaybe<Scalars['Decimal128']>;
  /** Type of Sale */
  type?: InputMaybe<SaleType>;
};

export type UpdateTokenInput = {
  feeWithdraw: Scalars['Decimal128'];
  maxWithdraw?: InputMaybe<Scalars['Decimal128']>;
  minDeposit?: InputMaybe<Scalars['Decimal128']>;
  minWithdraw?: InputMaybe<Scalars['Decimal128']>;
  rate: Scalars['Float'];
  symbol: Scalars['String'];
  tokenBlockchains?: InputMaybe<TokenBlockchainsPermissions>;
};

export type UpdateUserRolesInput = {
  /** Roles */
  roles: Array<Role>;
  /** User ID */
  userId: Scalars['String'];
};

export type UpdateUserSalesPermissionInput = {
  isPrivateSalesUser?: InputMaybe<Scalars['Boolean']>;
  isSeedingSalesUser?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  appleEmail?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  /** User Limit of commission amount */
  commissionAmountLimit?: Maybe<Scalars['Decimal128']>;
  email?: Maybe<Scalars['String']>;
  facebookEmail?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hasPassword: Scalars['Boolean'];
  initialProvider?: Maybe<Scalars['String']>;
  isBanned: Scalars['Boolean'];
  isPrivateSalesUser: Scalars['Boolean'];
  isSeedingSalesUser: Scalars['Boolean'];
  largestCommissionPackageBuyDate?: Maybe<Scalars['String']>;
  largestCommissionPackageName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  /** Commission amount has been received */
  receivedCommissionAmount?: Maybe<Scalars['String']>;
  refUser?: Maybe<User>;
  registeredPackages?: Maybe<Array<Package>>;
  roles?: Maybe<Array<Role>>;
  setSponsorTime?: Maybe<Scalars['Float']>;
  wallet?: Maybe<UserWalletResponse>;
};

export type UserInterestPaymentPlanFilter = {
  /** Name of package */
  packageName?: InputMaybe<Scalars['String']>;
  /** Payment date start from (GMT Timestamp in miliseconds) */
  paymentDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Payment date start before (GMT Timestamp in miliseconds) */
  paymentDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<InterestStatus>;
};

export type UserInterestPaymentPlanInput = {
  filter?: InputMaybe<UserInterestPaymentPlanFilter>;
  pagination: NumericPaginationBaseInput;
};

export type UserPackage = {
  __typename?: 'UserPackage';
  _id: Scalars['String'];
  /** Amount of PYROC */
  amount: Scalars['Decimal128'];
  buyDate: Scalars['DateTime'];
  /** Limit of commission amount is added to user */
  commissionAmountLimit?: Maybe<Scalars['Decimal128']>;
  /** any data */
  data?: Maybe<Scalars['JSON']>;
  /** Duration of package */
  duration: Scalars['Int'];
  endDate: Scalars['DateTime'];
  finishedAt?: Maybe<Scalars['DateTime']>;
  /** Package ID */
  packageId: Scalars['String'];
  /** Name of package */
  packageName: Scalars['String'];
  /** Price In USDT */
  price: Scalars['Decimal128'];
  /** Profit rate percent */
  profit?: Maybe<Scalars['Float']>;
  register?: Maybe<User>;
  status: UserPackageStatus;
  /** User ID */
  userId: Scalars['String'];
};

export enum UserPackageStatus {
  Cancelled = 'CANCELLED',
  Done = 'DONE',
  Inprogress = 'INPROGRESS',
}

export type UserRegisteredSaleFilter = {
  /** Buy date start from (GMT Timestamp in miliseconds) */
  buyDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Buy date start before (GMT Timestamp in miliseconds) */
  buyDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  /** User email */
  email?: InputMaybe<Scalars['String']>;
  /** User fullname */
  fullName?: InputMaybe<Scalars['String']>;
  saleId?: InputMaybe<Scalars['String']>;
  /** Type of Sale */
  type?: InputMaybe<SaleType>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserRegisteredSaleInput = {
  filter?: InputMaybe<UserRegisteredSaleFilter>;
  pagination: NumericPaginationBaseInput;
};

export type UserRegisteredSalesRes = {
  __typename?: 'UserRegisteredSalesRes';
  data: Array<UserSale>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type UserSale = {
  __typename?: 'UserSale';
  _id: Scalars['String'];
  /** Amount of Pyroc user bought */
  boughtAmount?: Maybe<Scalars['Decimal128']>;
  buyDate: Scalars['DateTime'];
  /** any data */
  data?: Maybe<Scalars['JSON']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  /** Maximum Pyroc an user can buy in this sale */
  maxAmount?: Maybe<Scalars['Decimal128']>;
  /** Minimum Pyroc user need to buy */
  minAmount?: Maybe<Scalars['Decimal128']>;
  /** Price of 1 Pyroc in USDT */
  price?: Maybe<Scalars['Decimal128']>;
  register?: Maybe<User>;
  releasePlan?: Maybe<Array<SaleReleasePlan>>;
  releasePlanDetail?: Maybe<Array<UnlockSale>>;
  sale?: Maybe<Sale>;
  saleId: Scalars['String'];
  saleName?: Maybe<Scalars['String']>;
  status: UserSaleStatus;
  /** Total Pyroc has been bought before this sale registration */
  totalSold?: Maybe<Scalars['Decimal128']>;
  /** Total Pyroc can be bought */
  totalSupply?: Maybe<Scalars['Decimal128']>;
  /** Type of Sale */
  type?: Maybe<SaleType>;
  unlockedPercent?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export enum UserSaleStatus {
  Done = 'DONE',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export type UserUnlockSalePlanFilter = {
  status?: InputMaybe<UnlockSaleStatus>;
  /** Unlock date start from (GMT Timestamp in miliseconds) */
  unlockDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Unlock date start before (GMT Timestamp in miliseconds) */
  unlockDateFilterUpperBound?: InputMaybe<Scalars['String']>;
};

export type UserUnlockSalePlanInput = {
  filter?: InputMaybe<UserUnlockSalePlanFilter>;
  pagination: NumericPaginationBaseInput;
};

export type UserWallet = {
  __typename?: 'UserWallet';
  _id: Scalars['String'];
  available: Scalars['Decimal128'];
  balanceBlockchains?: Maybe<BalanceBlockchains>;
  createdAt: Scalars['DateTime'];
  lock: Scalars['Decimal128'];
  tokenAbbr: Scalars['String'];
  tokenInfo?: Maybe<Token>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserWalletBlockchain = {
  __typename?: 'UserWalletBlockchain';
  _id: Scalars['String'];
  address?: Maybe<Address>;
  amount: Scalars['Decimal128'];
  blockchain: BlockchainType;
  tokenAbbr: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type UserWalletBlockchainResponse = {
  __typename?: 'UserWalletBlockchainResponse';
  data: Array<UserWalletBlockchain>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type UserWalletResponse = {
  __typename?: 'UserWalletResponse';
  walletAddress: Array<Maybe<Address>>;
  walletBalances: Array<Maybe<UserWallet>>;
};

export type UsersRegisteredPackageFilter = {
  /** Buy date start from (GMT Timestamp in miliseconds) */
  buyDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Buy date start before (GMT Timestamp in miliseconds) */
  buyDateFilterUpperBound?: InputMaybe<Scalars['String']>;
  /** User email */
  email?: InputMaybe<Scalars['String']>;
  /** User fullname */
  fullName?: InputMaybe<Scalars['String']>;
  /** Package ID */
  packageId?: InputMaybe<Scalars['String']>;
  /** User ID */
  userId?: InputMaybe<Scalars['String']>;
};

export type UsersRegisteredPackageInput = {
  filter?: InputMaybe<UsersRegisteredPackageFilter>;
  pagination: NumericPaginationBaseInput;
};

export type UsersRegisteredPackageRes = {
  __typename?: 'UsersRegisteredPackageRes';
  data: Array<UserPackage>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type UsersRes = {
  __typename?: 'UsersRes';
  data: Array<User>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type VerifiedOtpResetPassword = {
  __typename?: 'VerifiedOTPResetPassword';
  codeId: Scalars['String'];
  expiresAt: Scalars['Float'];
};

export type VerifyOtpResetPasswordInput = {
  /** code from email */
  code: Scalars['String'];
  /** code id from register request */
  codeId: Scalars['String'];
};

export type WalletBlockchain = {
  __typename?: 'WalletBlockchain';
  walletAddress: Scalars['String'];
};

export type Withdraw = {
  __typename?: 'Withdraw';
  _id: Scalars['String'];
  address: Scalars['String'];
  amount: Scalars['Decimal128'];
  blockChainResult?: Maybe<BlockChainResult>;
  blockchainStatus?: Maybe<BlockChainStatus>;
  createdAt: Scalars['DateTime'];
  feeWithdraw: Scalars['Decimal128'];
  fromBlockchain: BlockchainType;
  note?: Maybe<Scalars['String']>;
  status: WithdrawStatus;
  token: Scalars['String'];
  tokenType: TokenType;
  transactionHash?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  /** User ID */
  userId: Scalars['String'];
};

export type WithdrawRes = {
  __typename?: 'WithdrawRes';
  data: Array<Withdraw>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export enum WithdrawStatus {
  Billing = 'BILLING',
  Completed = 'COMPLETED',
  Holding = 'HOLDING',
  Pending = 'PENDING',
  Reject = 'REJECT',
}

export type WithdrawalHistoryFilter = {
  status?: InputMaybe<WithdrawStatus>;
  /** Withdrawal date from (GMT Timestamp in milliseconds) */
  withdrawalDateFilterLowerBound?: InputMaybe<Scalars['String']>;
  /** Withdrawal date before (GMT Timestamp in milliseconds) */
  withdrawalDateFilterUpperBound?: InputMaybe<Scalars['String']>;
};

export type WithdrawalHistoryInput = {
  filter?: InputMaybe<WithdrawalHistoryFilter>;
  pagination: NumericPaginationBaseInput;
};

export type UserModelFragment = {
  __typename?: 'User';
  _id: string;
  email?: string | null;
  initialProvider?: string | null;
  fullName?: string | null;
  roles?: Array<Role> | null;
  isBanned: boolean;
  commissionAmountLimit?: any | null;
  receivedCommissionAmount?: string | null;
  largestCommissionPackageName?: string | null;
  largestCommissionPackageBuyDate?: string | null;
  birthday?: any | null;
  phoneNumber?: string | null;
  hasPassword: boolean;
  isSeedingSalesUser: boolean;
  isPrivateSalesUser: boolean;
  wallet?: {
    __typename?: 'UserWalletResponse';
    walletBalances: Array<{
      __typename?: 'UserWallet';
      available: any;
      tokenInfo?: { __typename?: 'Token'; name: string } | null;
    } | null>;
    walletAddress: Array<{ __typename?: 'Address'; blockchain: BlockchainType; address: string } | null>;
  } | null;
  refUser?: { __typename?: 'User'; _id: string; fullName?: string | null } | null;
};

export type LoginMutationVariables = Exact<{
  input: LoginWithEmailInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  loginWithEmail: {
    __typename?: 'JWT';
    accessToken: string;
    expiresAt: number;
    refreshToken: string;
    refreshTokenExpiresAt: number;
  };
};

export const UserModelFragmentDoc = gql`
  fragment UserModel on User {
    _id
    email
    initialProvider
    fullName
    roles
    isBanned
    commissionAmountLimit
    receivedCommissionAmount
    largestCommissionPackageName
    largestCommissionPackageBuyDate
    birthday
    phoneNumber
    hasPassword
    isSeedingSalesUser
    isPrivateSalesUser
    wallet {
      walletBalances {
        available
        tokenInfo {
          name
        }
      }
      walletAddress {
        blockchain
        address
      }
    }
    refUser {
      _id
      fullName
    }
  }
`;
export const LoginDocument = gql`
  mutation login($input: LoginWithEmailInput!) {
    loginWithEmail(input: $input) {
      accessToken
      expiresAt
      refreshToken
      refreshTokenExpiresAt
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<LoginMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginMutation>(LoginDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'login',
        'mutation',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
