import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['bigint']>;
  id: Scalars['uuid'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Int_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['bigint']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['bigint']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
  move: Scalars['String'];
  order: Scalars['Int'];
  position: Scalars['Int'];
  size: Scalars['Int'];
  street: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "actions" */
export type Actions_Aggregate = {
  __typename?: 'actions_aggregate';
  aggregate?: Maybe<Actions_Aggregate_Fields>;
  nodes: Array<Actions>;
};

/** aggregate fields of "actions" */
export type Actions_Aggregate_Fields = {
  __typename?: 'actions_aggregate_fields';
  avg?: Maybe<Actions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Actions_Max_Fields>;
  min?: Maybe<Actions_Min_Fields>;
  stddev?: Maybe<Actions_Stddev_Fields>;
  stddev_pop?: Maybe<Actions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Actions_Stddev_Samp_Fields>;
  sum?: Maybe<Actions_Sum_Fields>;
  var_pop?: Maybe<Actions_Var_Pop_Fields>;
  var_samp?: Maybe<Actions_Var_Samp_Fields>;
  variance?: Maybe<Actions_Variance_Fields>;
};


/** aggregate fields of "actions" */
export type Actions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "actions" */
export type Actions_Aggregate_Order_By = {
  avg?: InputMaybe<Actions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Actions_Max_Order_By>;
  min?: InputMaybe<Actions_Min_Order_By>;
  stddev?: InputMaybe<Actions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Actions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Actions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Actions_Sum_Order_By>;
  var_pop?: InputMaybe<Actions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Actions_Var_Samp_Order_By>;
  variance?: InputMaybe<Actions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "actions" */
export type Actions_Arr_Rel_Insert_Input = {
  data: Array<Actions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};

/** aggregate avg on columns */
export type Actions_Avg_Fields = {
  __typename?: 'actions_avg_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "actions" */
export type Actions_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Actions_Bool_Exp>>;
  _not?: InputMaybe<Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Actions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  move?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  street?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "actions" */
export enum Actions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActionsPkey = 'actions_pkey'
}

/** input type for incrementing numeric columns in table "actions" */
export type Actions_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  move?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Actions_Max_Fields = {
  __typename?: 'actions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  move?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "actions" */
export type Actions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  move?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  move?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "actions" */
export type Actions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  move?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "actions" */
export type Actions_Mutation_Response = {
  __typename?: 'actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions>;
};

/** on_conflict condition type for table "actions" */
export type Actions_On_Conflict = {
  constraint: Actions_Constraint;
  update_columns?: Array<Actions_Update_Column>;
  where?: InputMaybe<Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "actions". */
export type Actions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  move?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: actions */
export type Actions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Move = 'move',
  /** column name */
  Order = 'order',
  /** column name */
  Position = 'position',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "actions" */
export type Actions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  move?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Actions_Stddev_Fields = {
  __typename?: 'actions_stddev_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "actions" */
export type Actions_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Actions_Stddev_Pop_Fields = {
  __typename?: 'actions_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "actions" */
export type Actions_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Actions_Stddev_Samp_Fields = {
  __typename?: 'actions_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "actions" */
export type Actions_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "actions" */
export type Actions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Actions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Actions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  move?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Actions_Sum_Fields = {
  __typename?: 'actions_sum_fields';
  order?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "actions" */
export type Actions_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Move = 'move',
  /** column name */
  Order = 'order',
  /** column name */
  Position = 'position',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Actions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Actions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Actions_Var_Pop_Fields = {
  __typename?: 'actions_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "actions" */
export type Actions_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Actions_Var_Samp_Fields = {
  __typename?: 'actions_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "actions" */
export type Actions_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Actions_Variance_Fields = {
  __typename?: 'actions_variance_fields';
  order?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "actions" */
export type Actions_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "cards" */
export type Cards = {
  __typename?: 'cards';
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  /** An aggregate relationship */
  hands_cards_aggregate: Hands_Cards_Aggregate;
  id: Scalars['uuid'];
  mark: Scalars['String'];
  num: Scalars['String'];
};


/** columns and relationships of "cards" */
export type CardsHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


/** columns and relationships of "cards" */
export type CardsHands_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};

/** aggregated selection of "cards" */
export type Cards_Aggregate = {
  __typename?: 'cards_aggregate';
  aggregate?: Maybe<Cards_Aggregate_Fields>;
  nodes: Array<Cards>;
};

/** aggregate fields of "cards" */
export type Cards_Aggregate_Fields = {
  __typename?: 'cards_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cards_Max_Fields>;
  min?: Maybe<Cards_Min_Fields>;
};


/** aggregate fields of "cards" */
export type Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Cards_Bool_Exp>>;
  _not?: InputMaybe<Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Cards_Bool_Exp>>;
  hands_cards?: InputMaybe<Hands_Cards_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mark?: InputMaybe<String_Comparison_Exp>;
  num?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cards" */
export enum Cards_Constraint {
  /** unique or primary key constraint on columns "num", "mark" */
  CardsNumMarkKey = 'cards_num_mark_key',
  /** unique or primary key constraint on columns "id" */
  CardsPkey = 'cards_pkey'
}

/** input type for inserting data into table "cards" */
export type Cards_Insert_Input = {
  hands_cards?: InputMaybe<Hands_Cards_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['String']>;
  num?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cards_Max_Fields = {
  __typename?: 'cards_max_fields';
  id?: Maybe<Scalars['uuid']>;
  mark?: Maybe<Scalars['String']>;
  num?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cards_Min_Fields = {
  __typename?: 'cards_min_fields';
  id?: Maybe<Scalars['uuid']>;
  mark?: Maybe<Scalars['String']>;
  num?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cards" */
export type Cards_Mutation_Response = {
  __typename?: 'cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cards>;
};

/** input type for inserting object relation for remote table "cards" */
export type Cards_Obj_Rel_Insert_Input = {
  data: Cards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};

/** on_conflict condition type for table "cards" */
export type Cards_On_Conflict = {
  constraint: Cards_Constraint;
  update_columns?: Array<Cards_Update_Column>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "cards". */
export type Cards_Order_By = {
  hands_cards_aggregate?: InputMaybe<Hands_Cards_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  mark?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cards */
export type Cards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cards" */
export enum Cards_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Mark = 'mark',
  /** column name */
  Num = 'num'
}

/** input type for updating data in table "cards" */
export type Cards_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['String']>;
  num?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "cards" */
export type Cards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cards_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['String']>;
  num?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cards" */
export enum Cards_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Mark = 'mark',
  /** column name */
  Num = 'num'
}

export type Cards_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "hands" */
export type Hands = {
  __typename?: 'hands';
  /** An array relationship */
  actions: Array<Actions>;
  /** An aggregate relationship */
  actions_aggregate: Actions_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  es: Scalars['Float'];
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  /** An aggregate relationship */
  hands_cards_aggregate: Hands_Cards_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  labels: Array<Labels>;
  /** An aggregate relationship */
  labels_aggregate: Labels_Aggregate;
  /** An array relationship */
  pots: Array<Pots>;
  /** An aggregate relationship */
  pots_aggregate: Pots_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};


/** columns and relationships of "hands" */
export type HandsActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsHands_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsPotsArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsPots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};

/** aggregated selection of "hands" */
export type Hands_Aggregate = {
  __typename?: 'hands_aggregate';
  aggregate?: Maybe<Hands_Aggregate_Fields>;
  nodes: Array<Hands>;
};

/** aggregate fields of "hands" */
export type Hands_Aggregate_Fields = {
  __typename?: 'hands_aggregate_fields';
  avg?: Maybe<Hands_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Hands_Max_Fields>;
  min?: Maybe<Hands_Min_Fields>;
  stddev?: Maybe<Hands_Stddev_Fields>;
  stddev_pop?: Maybe<Hands_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hands_Stddev_Samp_Fields>;
  sum?: Maybe<Hands_Sum_Fields>;
  var_pop?: Maybe<Hands_Var_Pop_Fields>;
  var_samp?: Maybe<Hands_Var_Samp_Fields>;
  variance?: Maybe<Hands_Variance_Fields>;
};


/** aggregate fields of "hands" */
export type Hands_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hands_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Hands_Avg_Fields = {
  __typename?: 'hands_avg_fields';
  es?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "hands". All fields are combined with a logical 'AND'. */
export type Hands_Bool_Exp = {
  _and?: InputMaybe<Array<Hands_Bool_Exp>>;
  _not?: InputMaybe<Hands_Bool_Exp>;
  _or?: InputMaybe<Array<Hands_Bool_Exp>>;
  actions?: InputMaybe<Actions_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  es?: InputMaybe<Float_Comparison_Exp>;
  hands_cards?: InputMaybe<Hands_Cards_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  labels?: InputMaybe<Labels_Bool_Exp>;
  pots?: InputMaybe<Pots_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "hands_cards" */
export type Hands_Cards = {
  __typename?: 'hands_cards';
  /** An object relationship */
  card: Cards;
  card_id: Scalars['uuid'];
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
  order: Scalars['Int'];
};

/** aggregated selection of "hands_cards" */
export type Hands_Cards_Aggregate = {
  __typename?: 'hands_cards_aggregate';
  aggregate?: Maybe<Hands_Cards_Aggregate_Fields>;
  nodes: Array<Hands_Cards>;
};

/** aggregate fields of "hands_cards" */
export type Hands_Cards_Aggregate_Fields = {
  __typename?: 'hands_cards_aggregate_fields';
  avg?: Maybe<Hands_Cards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Hands_Cards_Max_Fields>;
  min?: Maybe<Hands_Cards_Min_Fields>;
  stddev?: Maybe<Hands_Cards_Stddev_Fields>;
  stddev_pop?: Maybe<Hands_Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hands_Cards_Stddev_Samp_Fields>;
  sum?: Maybe<Hands_Cards_Sum_Fields>;
  var_pop?: Maybe<Hands_Cards_Var_Pop_Fields>;
  var_samp?: Maybe<Hands_Cards_Var_Samp_Fields>;
  variance?: Maybe<Hands_Cards_Variance_Fields>;
};


/** aggregate fields of "hands_cards" */
export type Hands_Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hands_cards" */
export type Hands_Cards_Aggregate_Order_By = {
  avg?: InputMaybe<Hands_Cards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hands_Cards_Max_Order_By>;
  min?: InputMaybe<Hands_Cards_Min_Order_By>;
  stddev?: InputMaybe<Hands_Cards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Hands_Cards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Hands_Cards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Hands_Cards_Sum_Order_By>;
  var_pop?: InputMaybe<Hands_Cards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Hands_Cards_Var_Samp_Order_By>;
  variance?: InputMaybe<Hands_Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hands_cards" */
export type Hands_Cards_Arr_Rel_Insert_Input = {
  data: Array<Hands_Cards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hands_Cards_On_Conflict>;
};

/** aggregate avg on columns */
export type Hands_Cards_Avg_Fields = {
  __typename?: 'hands_cards_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hands_cards" */
export type Hands_Cards_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hands_cards". All fields are combined with a logical 'AND'. */
export type Hands_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Hands_Cards_Bool_Exp>>;
  _not?: InputMaybe<Hands_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Hands_Cards_Bool_Exp>>;
  card?: InputMaybe<Cards_Bool_Exp>;
  card_id?: InputMaybe<Uuid_Comparison_Exp>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "hands_cards" */
export enum Hands_Cards_Constraint {
  /** unique or primary key constraint on columns "card_id", "hand_id", "order" */
  HandsCardsHandIdCardIdOrderKey = 'hands_cards_hand_id_card_id_order_key',
  /** unique or primary key constraint on columns "id" */
  HandsCardsPkey = 'hands_cards_pkey'
}

/** input type for incrementing numeric columns in table "hands_cards" */
export type Hands_Cards_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "hands_cards" */
export type Hands_Cards_Insert_Input = {
  card?: InputMaybe<Cards_Obj_Rel_Insert_Input>;
  card_id?: InputMaybe<Scalars['uuid']>;
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Hands_Cards_Max_Fields = {
  __typename?: 'hands_cards_max_fields';
  card_id?: Maybe<Scalars['uuid']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "hands_cards" */
export type Hands_Cards_Max_Order_By = {
  card_id?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Hands_Cards_Min_Fields = {
  __typename?: 'hands_cards_min_fields';
  card_id?: Maybe<Scalars['uuid']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "hands_cards" */
export type Hands_Cards_Min_Order_By = {
  card_id?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "hands_cards" */
export type Hands_Cards_Mutation_Response = {
  __typename?: 'hands_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hands_Cards>;
};

/** on_conflict condition type for table "hands_cards" */
export type Hands_Cards_On_Conflict = {
  constraint: Hands_Cards_Constraint;
  update_columns?: Array<Hands_Cards_Update_Column>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "hands_cards". */
export type Hands_Cards_Order_By = {
  card?: InputMaybe<Cards_Order_By>;
  card_id?: InputMaybe<Order_By>;
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hands_cards */
export type Hands_Cards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hands_cards" */
export enum Hands_Cards_Select_Column {
  /** column name */
  CardId = 'card_id',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "hands_cards" */
export type Hands_Cards_Set_Input = {
  card_id?: InputMaybe<Scalars['uuid']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Hands_Cards_Stddev_Fields = {
  __typename?: 'hands_cards_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hands_cards" */
export type Hands_Cards_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hands_Cards_Stddev_Pop_Fields = {
  __typename?: 'hands_cards_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hands_cards" */
export type Hands_Cards_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hands_Cards_Stddev_Samp_Fields = {
  __typename?: 'hands_cards_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hands_cards" */
export type Hands_Cards_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "hands_cards" */
export type Hands_Cards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hands_Cards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hands_Cards_Stream_Cursor_Value_Input = {
  card_id?: InputMaybe<Scalars['uuid']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Hands_Cards_Sum_Fields = {
  __typename?: 'hands_cards_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hands_cards" */
export type Hands_Cards_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "hands_cards" */
export enum Hands_Cards_Update_Column {
  /** column name */
  CardId = 'card_id',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order'
}

export type Hands_Cards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hands_Cards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hands_Cards_Set_Input>;
  where: Hands_Cards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Hands_Cards_Var_Pop_Fields = {
  __typename?: 'hands_cards_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hands_cards" */
export type Hands_Cards_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hands_Cards_Var_Samp_Fields = {
  __typename?: 'hands_cards_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hands_cards" */
export type Hands_Cards_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Hands_Cards_Variance_Fields = {
  __typename?: 'hands_cards_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hands_cards" */
export type Hands_Cards_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "hands" */
export enum Hands_Constraint {
  /** unique or primary key constraint on columns "id" */
  HandsPkey = 'hands_pkey'
}

/** input type for incrementing numeric columns in table "hands" */
export type Hands_Inc_Input = {
  es?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "hands" */
export type Hands_Insert_Input = {
  actions?: InputMaybe<Actions_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  es?: InputMaybe<Scalars['Float']>;
  hands_cards?: InputMaybe<Hands_Cards_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  labels?: InputMaybe<Labels_Arr_Rel_Insert_Input>;
  pots?: InputMaybe<Pots_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hands_Max_Fields = {
  __typename?: 'hands_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  es?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Hands_Min_Fields = {
  __typename?: 'hands_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  es?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "hands" */
export type Hands_Mutation_Response = {
  __typename?: 'hands_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hands>;
};

/** input type for inserting object relation for remote table "hands" */
export type Hands_Obj_Rel_Insert_Input = {
  data: Hands_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hands_On_Conflict>;
};

/** on_conflict condition type for table "hands" */
export type Hands_On_Conflict = {
  constraint: Hands_Constraint;
  update_columns?: Array<Hands_Update_Column>;
  where?: InputMaybe<Hands_Bool_Exp>;
};

/** Ordering options when selecting data from "hands". */
export type Hands_Order_By = {
  actions_aggregate?: InputMaybe<Actions_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  hands_cards_aggregate?: InputMaybe<Hands_Cards_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  labels_aggregate?: InputMaybe<Labels_Aggregate_Order_By>;
  pots_aggregate?: InputMaybe<Pots_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hands */
export type Hands_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hands" */
export enum Hands_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Es = 'es',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "hands" */
export type Hands_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  es?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Hands_Stddev_Fields = {
  __typename?: 'hands_stddev_fields';
  es?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Hands_Stddev_Pop_Fields = {
  __typename?: 'hands_stddev_pop_fields';
  es?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Hands_Stddev_Samp_Fields = {
  __typename?: 'hands_stddev_samp_fields';
  es?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "hands" */
export type Hands_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hands_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hands_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  es?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Hands_Sum_Fields = {
  __typename?: 'hands_sum_fields';
  es?: Maybe<Scalars['Float']>;
};

/** update columns of table "hands" */
export enum Hands_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Es = 'es',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Hands_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hands_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hands_Set_Input>;
  where: Hands_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Hands_Var_Pop_Fields = {
  __typename?: 'hands_var_pop_fields';
  es?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Hands_Var_Samp_Fields = {
  __typename?: 'hands_var_samp_fields';
  es?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Hands_Variance_Fields = {
  __typename?: 'hands_variance_fields';
  es?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "labels" */
export type Labels = {
  __typename?: 'labels';
  color?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "labels" */
export type Labels_Aggregate = {
  __typename?: 'labels_aggregate';
  aggregate?: Maybe<Labels_Aggregate_Fields>;
  nodes: Array<Labels>;
};

/** aggregate fields of "labels" */
export type Labels_Aggregate_Fields = {
  __typename?: 'labels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Labels_Max_Fields>;
  min?: Maybe<Labels_Min_Fields>;
};


/** aggregate fields of "labels" */
export type Labels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "labels" */
export type Labels_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Labels_Max_Order_By>;
  min?: InputMaybe<Labels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "labels" */
export type Labels_Arr_Rel_Insert_Input = {
  data: Array<Labels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Labels_Bool_Exp>>;
  _not?: InputMaybe<Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Labels_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "labels" */
export enum Labels_Constraint {
  /** unique or primary key constraint on columns "id" */
  LabelsPkey = 'labels_pkey'
}

/** input type for inserting data into table "labels" */
export type Labels_Insert_Input = {
  color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Labels_Max_Fields = {
  __typename?: 'labels_max_fields';
  color?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "labels" */
export type Labels_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Labels_Min_Fields = {
  __typename?: 'labels_min_fields';
  color?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "labels" */
export type Labels_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "labels" */
export type Labels_Mutation_Response = {
  __typename?: 'labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Labels>;
};

/** on_conflict condition type for table "labels" */
export type Labels_On_Conflict = {
  constraint: Labels_Constraint;
  update_columns?: Array<Labels_Update_Column>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "labels". */
export type Labels_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labels */
export type Labels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "labels" */
export enum Labels_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Content = 'content',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "labels" */
export type Labels_Set_Input = {
  color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "labels" */
export type Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Labels_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "labels" */
export enum Labels_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Content = 'content',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id'
}

export type Labels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>;
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>;
  /** delete data from the table: "cards" */
  delete_cards?: Maybe<Cards_Mutation_Response>;
  /** delete single row from the table: "cards" */
  delete_cards_by_pk?: Maybe<Cards>;
  /** delete data from the table: "hands" */
  delete_hands?: Maybe<Hands_Mutation_Response>;
  /** delete single row from the table: "hands" */
  delete_hands_by_pk?: Maybe<Hands>;
  /** delete data from the table: "hands_cards" */
  delete_hands_cards?: Maybe<Hands_Cards_Mutation_Response>;
  /** delete single row from the table: "hands_cards" */
  delete_hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** delete data from the table: "labels" */
  delete_labels?: Maybe<Labels_Mutation_Response>;
  /** delete single row from the table: "labels" */
  delete_labels_by_pk?: Maybe<Labels>;
  /** delete data from the table: "pots" */
  delete_pots?: Maybe<Pots_Mutation_Response>;
  /** delete single row from the table: "pots" */
  delete_pots_by_pk?: Maybe<Pots>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>;
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>;
  /** insert data into the table: "cards" */
  insert_cards?: Maybe<Cards_Mutation_Response>;
  /** insert a single row into the table: "cards" */
  insert_cards_one?: Maybe<Cards>;
  /** insert data into the table: "hands" */
  insert_hands?: Maybe<Hands_Mutation_Response>;
  /** insert data into the table: "hands_cards" */
  insert_hands_cards?: Maybe<Hands_Cards_Mutation_Response>;
  /** insert a single row into the table: "hands_cards" */
  insert_hands_cards_one?: Maybe<Hands_Cards>;
  /** insert a single row into the table: "hands" */
  insert_hands_one?: Maybe<Hands>;
  /** insert data into the table: "labels" */
  insert_labels?: Maybe<Labels_Mutation_Response>;
  /** insert a single row into the table: "labels" */
  insert_labels_one?: Maybe<Labels>;
  /** insert data into the table: "pots" */
  insert_pots?: Maybe<Pots_Mutation_Response>;
  /** insert a single row into the table: "pots" */
  insert_pots_one?: Maybe<Pots>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>;
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>;
  /** update multiples rows of table: "actions" */
  update_actions_many?: Maybe<Array<Maybe<Actions_Mutation_Response>>>;
  /** update data of the table: "cards" */
  update_cards?: Maybe<Cards_Mutation_Response>;
  /** update single row of the table: "cards" */
  update_cards_by_pk?: Maybe<Cards>;
  /** update multiples rows of table: "cards" */
  update_cards_many?: Maybe<Array<Maybe<Cards_Mutation_Response>>>;
  /** update data of the table: "hands" */
  update_hands?: Maybe<Hands_Mutation_Response>;
  /** update single row of the table: "hands" */
  update_hands_by_pk?: Maybe<Hands>;
  /** update data of the table: "hands_cards" */
  update_hands_cards?: Maybe<Hands_Cards_Mutation_Response>;
  /** update single row of the table: "hands_cards" */
  update_hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** update multiples rows of table: "hands_cards" */
  update_hands_cards_many?: Maybe<Array<Maybe<Hands_Cards_Mutation_Response>>>;
  /** update multiples rows of table: "hands" */
  update_hands_many?: Maybe<Array<Maybe<Hands_Mutation_Response>>>;
  /** update data of the table: "labels" */
  update_labels?: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk?: Maybe<Labels>;
  /** update multiples rows of table: "labels" */
  update_labels_many?: Maybe<Array<Maybe<Labels_Mutation_Response>>>;
  /** update data of the table: "pots" */
  update_pots?: Maybe<Pots_Mutation_Response>;
  /** update single row of the table: "pots" */
  update_pots_by_pk?: Maybe<Pots>;
  /** update multiples rows of table: "pots" */
  update_pots_many?: Maybe<Array<Maybe<Pots_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ActionsArgs = {
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CardsArgs = {
  where: Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HandsArgs = {
  where: Hands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hands_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Hands_CardsArgs = {
  where: Hands_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hands_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LabelsArgs = {
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Labels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PotsArgs = {
  where: Pots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pots_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CardsArgs = {
  objects: Array<Cards_Insert_Input>;
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cards_OneArgs = {
  object: Cards_Insert_Input;
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HandsArgs = {
  objects: Array<Hands_Insert_Input>;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hands_CardsArgs = {
  objects: Array<Hands_Cards_Insert_Input>;
  on_conflict?: InputMaybe<Hands_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hands_Cards_OneArgs = {
  object: Hands_Cards_Insert_Input;
  on_conflict?: InputMaybe<Hands_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hands_OneArgs = {
  object: Hands_Insert_Input;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LabelsArgs = {
  objects: Array<Labels_Insert_Input>;
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Labels_OneArgs = {
  object: Labels_Insert_Input;
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PotsArgs = {
  objects: Array<Pots_Insert_Input>;
  on_conflict?: InputMaybe<Pots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pots_OneArgs = {
  object: Pots_Insert_Input;
  on_conflict?: InputMaybe<Pots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ActionsArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_By_PkArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  pk_columns: Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_ManyArgs = {
  updates: Array<Actions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CardsArgs = {
  _set?: InputMaybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cards_By_PkArgs = {
  _set?: InputMaybe<Cards_Set_Input>;
  pk_columns: Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cards_ManyArgs = {
  updates: Array<Cards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HandsArgs = {
  _inc?: InputMaybe<Hands_Inc_Input>;
  _set?: InputMaybe<Hands_Set_Input>;
  where: Hands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_By_PkArgs = {
  _inc?: InputMaybe<Hands_Inc_Input>;
  _set?: InputMaybe<Hands_Set_Input>;
  pk_columns: Hands_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_CardsArgs = {
  _inc?: InputMaybe<Hands_Cards_Inc_Input>;
  _set?: InputMaybe<Hands_Cards_Set_Input>;
  where: Hands_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_Cards_By_PkArgs = {
  _inc?: InputMaybe<Hands_Cards_Inc_Input>;
  _set?: InputMaybe<Hands_Cards_Set_Input>;
  pk_columns: Hands_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_Cards_ManyArgs = {
  updates: Array<Hands_Cards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_ManyArgs = {
  updates: Array<Hands_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LabelsArgs = {
  _set?: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_By_PkArgs = {
  _set?: InputMaybe<Labels_Set_Input>;
  pk_columns: Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_ManyArgs = {
  updates: Array<Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PotsArgs = {
  _inc?: InputMaybe<Pots_Inc_Input>;
  _set?: InputMaybe<Pots_Set_Input>;
  where: Pots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pots_By_PkArgs = {
  _inc?: InputMaybe<Pots_Inc_Input>;
  _set?: InputMaybe<Pots_Set_Input>;
  pk_columns: Pots_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pots_ManyArgs = {
  updates: Array<Pots_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pots" */
export type Pots = {
  __typename?: 'pots';
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
  size: Scalars['Float'];
  street: Scalars['Int'];
};

/** aggregated selection of "pots" */
export type Pots_Aggregate = {
  __typename?: 'pots_aggregate';
  aggregate?: Maybe<Pots_Aggregate_Fields>;
  nodes: Array<Pots>;
};

/** aggregate fields of "pots" */
export type Pots_Aggregate_Fields = {
  __typename?: 'pots_aggregate_fields';
  avg?: Maybe<Pots_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pots_Max_Fields>;
  min?: Maybe<Pots_Min_Fields>;
  stddev?: Maybe<Pots_Stddev_Fields>;
  stddev_pop?: Maybe<Pots_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pots_Stddev_Samp_Fields>;
  sum?: Maybe<Pots_Sum_Fields>;
  var_pop?: Maybe<Pots_Var_Pop_Fields>;
  var_samp?: Maybe<Pots_Var_Samp_Fields>;
  variance?: Maybe<Pots_Variance_Fields>;
};


/** aggregate fields of "pots" */
export type Pots_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pots" */
export type Pots_Aggregate_Order_By = {
  avg?: InputMaybe<Pots_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pots_Max_Order_By>;
  min?: InputMaybe<Pots_Min_Order_By>;
  stddev?: InputMaybe<Pots_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pots_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pots_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pots_Sum_Order_By>;
  var_pop?: InputMaybe<Pots_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pots_Var_Samp_Order_By>;
  variance?: InputMaybe<Pots_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pots" */
export type Pots_Arr_Rel_Insert_Input = {
  data: Array<Pots_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pots_On_Conflict>;
};

/** aggregate avg on columns */
export type Pots_Avg_Fields = {
  __typename?: 'pots_avg_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pots" */
export type Pots_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pots". All fields are combined with a logical 'AND'. */
export type Pots_Bool_Exp = {
  _and?: InputMaybe<Array<Pots_Bool_Exp>>;
  _not?: InputMaybe<Pots_Bool_Exp>;
  _or?: InputMaybe<Array<Pots_Bool_Exp>>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  size?: InputMaybe<Float_Comparison_Exp>;
  street?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pots" */
export enum Pots_Constraint {
  /** unique or primary key constraint on columns "hand_id", "street" */
  PotsHandIdStreetKey = 'pots_hand_id_street_key',
  /** unique or primary key constraint on columns "id" */
  PotsPkey = 'pots_pkey'
}

/** input type for incrementing numeric columns in table "pots" */
export type Pots_Inc_Input = {
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pots" */
export type Pots_Insert_Input = {
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pots_Max_Fields = {
  __typename?: 'pots_max_fields';
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "pots" */
export type Pots_Max_Order_By = {
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pots_Min_Fields = {
  __typename?: 'pots_min_fields';
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "pots" */
export type Pots_Min_Order_By = {
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pots" */
export type Pots_Mutation_Response = {
  __typename?: 'pots_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pots>;
};

/** on_conflict condition type for table "pots" */
export type Pots_On_Conflict = {
  constraint: Pots_Constraint;
  update_columns?: Array<Pots_Update_Column>;
  where?: InputMaybe<Pots_Bool_Exp>;
};

/** Ordering options when selecting data from "pots". */
export type Pots_Order_By = {
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pots */
export type Pots_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "pots" */
export enum Pots_Select_Column {
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street'
}

/** input type for updating data in table "pots" */
export type Pots_Set_Input = {
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pots_Stddev_Fields = {
  __typename?: 'pots_stddev_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pots" */
export type Pots_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pots_Stddev_Pop_Fields = {
  __typename?: 'pots_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pots" */
export type Pots_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pots_Stddev_Samp_Fields = {
  __typename?: 'pots_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pots" */
export type Pots_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pots" */
export type Pots_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pots_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pots_Stream_Cursor_Value_Input = {
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Pots_Sum_Fields = {
  __typename?: 'pots_sum_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pots" */
export type Pots_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** update columns of table "pots" */
export enum Pots_Update_Column {
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street'
}

export type Pots_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pots_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pots_Set_Input>;
  where: Pots_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pots_Var_Pop_Fields = {
  __typename?: 'pots_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pots" */
export type Pots_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pots_Var_Samp_Fields = {
  __typename?: 'pots_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pots" */
export type Pots_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pots_Variance_Fields = {
  __typename?: 'pots_variance_fields';
  size?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pots" */
export type Pots_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  actions: Array<Actions>;
  /** An aggregate relationship */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "hands" */
  hands: Array<Hands>;
  /** fetch aggregated fields from the table: "hands" */
  hands_aggregate: Hands_Aggregate;
  /** fetch data from the table: "hands" using primary key columns */
  hands_by_pk?: Maybe<Hands>;
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  /** An aggregate relationship */
  hands_cards_aggregate: Hands_Cards_Aggregate;
  /** fetch data from the table: "hands_cards" using primary key columns */
  hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** An array relationship */
  labels: Array<Labels>;
  /** An aggregate relationship */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** An array relationship */
  pots: Array<Pots>;
  /** An aggregate relationship */
  pots_aggregate: Pots_Aggregate;
  /** fetch data from the table: "pots" using primary key columns */
  pots_by_pk?: Maybe<Pots>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Query_RootCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Query_RootCards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHandsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Order_By>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Query_RootHands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Order_By>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Query_RootHands_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Query_RootHands_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Query_RootHands_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Query_RootLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Query_RootLabels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPotsArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Query_RootPots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Query_RootPots_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner : "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  actions: Array<Actions>;
  /** An aggregate relationship */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table in a streaming manner : "actions" */
  actions_stream: Array<Actions>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table in a streaming manner : "cards" */
  cards_stream: Array<Cards>;
  /** fetch data from the table: "hands" */
  hands: Array<Hands>;
  /** fetch aggregated fields from the table: "hands" */
  hands_aggregate: Hands_Aggregate;
  /** fetch data from the table: "hands" using primary key columns */
  hands_by_pk?: Maybe<Hands>;
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  /** An aggregate relationship */
  hands_cards_aggregate: Hands_Cards_Aggregate;
  /** fetch data from the table: "hands_cards" using primary key columns */
  hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** fetch data from the table in a streaming manner : "hands_cards" */
  hands_cards_stream: Array<Hands_Cards>;
  /** fetch data from the table in a streaming manner : "hands" */
  hands_stream: Array<Hands>;
  /** An array relationship */
  labels: Array<Labels>;
  /** An aggregate relationship */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table in a streaming manner : "labels" */
  labels_stream: Array<Labels>;
  /** An array relationship */
  pots: Array<Pots>;
  /** An aggregate relationship */
  pots_aggregate: Pots_Aggregate;
  /** fetch data from the table: "pots" using primary key columns */
  pots_by_pk?: Maybe<Pots>;
  /** fetch data from the table in a streaming manner : "pots" */
  pots_stream: Array<Pots>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner : "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner : "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Actions_Stream_Cursor_Input>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Subscription_RootCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Subscription_RootCards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCards_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cards_Stream_Cursor_Input>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Subscription_RootHandsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Order_By>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Subscription_RootHands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Order_By>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Subscription_RootHands_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Subscription_RootHands_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Subscription_RootHands_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHands_Cards_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hands_Cards_Stream_Cursor_Input>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Subscription_RootHands_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hands_Stream_Cursor_Input>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Subscription_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootLabels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLabels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootPotsArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Subscription_RootPots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Subscription_RootPots_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPots_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pots_Stream_Cursor_Input>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String'];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};

export type CreateHandsMutationVariables = Exact<{
  object: Hands_Insert_Input;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
}>;


export type CreateHandsMutation = { __typename?: 'mutation_root', insert_hands_one?: { __typename?: 'hands', id: any, title: string, content: string, es: number, user_id: string, created_at: any, updated_at: any, actions: Array<{ __typename?: 'actions', id: any, hand_id: any, position: number, move: string, size: number, order: number, street: number, created_at: any, updated_at: any }>, hands_cards: Array<{ __typename?: 'hands_cards', order: number, card: { __typename?: 'cards', id: any, num: string, mark: string } }>, pots: Array<{ __typename?: 'pots', id: any, hand_id: any, size: number, street: number }> } | null };

export type DeleteHandsMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteHandsMutation = { __typename?: 'mutation_root', delete_hands_by_pk?: { __typename?: 'hands', id: any } | null };

export type GetAllHandIDsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHandIDsQuery = { __typename?: 'query_root', hands: Array<{ __typename?: 'hands', id: any }> };

export type GetAllHandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHandsQuery = { __typename?: 'query_root', hands: Array<{ __typename?: 'hands', id: any, title: string, content: string, es: number, user_id: string, created_at: any, updated_at: any, actions: Array<{ __typename?: 'actions', id: any, hand_id: any, position: number, move: string, size: number, street: number, order: number, created_at: any, updated_at: any }>, hands_cards: Array<{ __typename?: 'hands_cards', order: number, card: { __typename?: 'cards', id: any, num: string, mark: string } }>, pots: Array<{ __typename?: 'pots', id: any, hand_id: any, size: number, street: number }> }> };

export type GetHandByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetHandByIdQuery = { __typename?: 'query_root', hands_by_pk?: { __typename?: 'hands', id: any, title: string, content: string, es: number, user_id: string, created_at: any, updated_at: any, actions: Array<{ __typename?: 'actions', id: any, hand_id: any, position: number, move: string, size: number, order: number, street: number, created_at: any, updated_at: any }>, hands_cards: Array<{ __typename?: 'hands_cards', order: number, card: { __typename?: 'cards', id: any, num: string, mark: string } }>, pots: Array<{ __typename?: 'pots', id: any, hand_id: any, size: number, street: number }> } | null };

export type UpdateHandsMutationVariables = Exact<{
  id: Scalars['uuid'];
  handObj?: InputMaybe<Hands_Set_Input>;
  potObj: Array<Pots_Insert_Input> | Pots_Insert_Input;
  actionsObj: Array<Actions_Insert_Input> | Actions_Insert_Input;
  handsCardsObj: Array<Hands_Cards_Insert_Input> | Hands_Cards_Insert_Input;
}>;


export type UpdateHandsMutation = { __typename?: 'mutation_root', update_hands_by_pk?: { __typename?: 'hands', id: any, title: string, es: number, content: string } | null, delete_pots?: { __typename?: 'pots_mutation_response', affected_rows: number } | null, insert_pots?: { __typename?: 'pots_mutation_response', affected_rows: number } | null, delete_actions?: { __typename?: 'actions_mutation_response', affected_rows: number } | null, insert_actions?: { __typename?: 'actions_mutation_response', affected_rows: number } | null, delete_hands_cards?: { __typename?: 'hands_cards_mutation_response', affected_rows: number } | null, insert_hands_cards?: { __typename?: 'hands_cards_mutation_response', affected_rows: number } | null };


export const CreateHandsDocument = gql`
    mutation CreateHands($object: hands_insert_input!, $on_conflict: hands_on_conflict) {
  insert_hands_one(object: $object, on_conflict: $on_conflict) {
    id
    title
    content
    es
    user_id
    created_at
    updated_at
    actions(order_by: {street: asc, order: asc}) {
      id
      hand_id
      position
      move
      size
      order
      street
      created_at
      updated_at
    }
    hands_cards(order_by: {order: asc}) {
      card {
        id
        num
        mark
      }
      order
    }
    pots {
      id
      hand_id
      size
      street
    }
  }
}
    `;
export type CreateHandsMutationFn = Apollo.MutationFunction<CreateHandsMutation, CreateHandsMutationVariables>;

/**
 * __useCreateHandsMutation__
 *
 * To run a mutation, you first call `useCreateHandsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHandsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHandsMutation, { data, loading, error }] = useCreateHandsMutation({
 *   variables: {
 *      object: // value for 'object'
 *      on_conflict: // value for 'on_conflict'
 *   },
 * });
 */
export function useCreateHandsMutation(baseOptions?: Apollo.MutationHookOptions<CreateHandsMutation, CreateHandsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHandsMutation, CreateHandsMutationVariables>(CreateHandsDocument, options);
      }
export type CreateHandsMutationHookResult = ReturnType<typeof useCreateHandsMutation>;
export type CreateHandsMutationResult = Apollo.MutationResult<CreateHandsMutation>;
export type CreateHandsMutationOptions = Apollo.BaseMutationOptions<CreateHandsMutation, CreateHandsMutationVariables>;
export const DeleteHandsDocument = gql`
    mutation DeleteHands($id: uuid!) {
  delete_hands_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteHandsMutationFn = Apollo.MutationFunction<DeleteHandsMutation, DeleteHandsMutationVariables>;

/**
 * __useDeleteHandsMutation__
 *
 * To run a mutation, you first call `useDeleteHandsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHandsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHandsMutation, { data, loading, error }] = useDeleteHandsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHandsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHandsMutation, DeleteHandsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHandsMutation, DeleteHandsMutationVariables>(DeleteHandsDocument, options);
      }
export type DeleteHandsMutationHookResult = ReturnType<typeof useDeleteHandsMutation>;
export type DeleteHandsMutationResult = Apollo.MutationResult<DeleteHandsMutation>;
export type DeleteHandsMutationOptions = Apollo.BaseMutationOptions<DeleteHandsMutation, DeleteHandsMutationVariables>;
export const GetAllHandIDsDocument = gql`
    query GetAllHandIDs {
  hands {
    id
  }
}
    `;

/**
 * __useGetAllHandIDsQuery__
 *
 * To run a query within a React component, call `useGetAllHandIDsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHandIDsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHandIDsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHandIDsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHandIDsQuery, GetAllHandIDsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHandIDsQuery, GetAllHandIDsQueryVariables>(GetAllHandIDsDocument, options);
      }
export function useGetAllHandIDsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHandIDsQuery, GetAllHandIDsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHandIDsQuery, GetAllHandIDsQueryVariables>(GetAllHandIDsDocument, options);
        }
export type GetAllHandIDsQueryHookResult = ReturnType<typeof useGetAllHandIDsQuery>;
export type GetAllHandIDsLazyQueryHookResult = ReturnType<typeof useGetAllHandIDsLazyQuery>;
export type GetAllHandIDsQueryResult = Apollo.QueryResult<GetAllHandIDsQuery, GetAllHandIDsQueryVariables>;
export const GetAllHandsDocument = gql`
    query GetAllHands {
  hands {
    id
    title
    content
    es
    user_id
    created_at
    updated_at
    actions(order_by: {street: asc, order: asc}) {
      id
      hand_id
      position
      move
      size
      street
      order
      created_at
      updated_at
    }
    hands_cards(order_by: {order: asc}) {
      card {
        id
        num
        mark
      }
      order
    }
    pots {
      id
      hand_id
      size
      street
    }
  }
}
    `;

/**
 * __useGetAllHandsQuery__
 *
 * To run a query within a React component, call `useGetAllHandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHandsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHandsQuery, GetAllHandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHandsQuery, GetAllHandsQueryVariables>(GetAllHandsDocument, options);
      }
export function useGetAllHandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHandsQuery, GetAllHandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHandsQuery, GetAllHandsQueryVariables>(GetAllHandsDocument, options);
        }
export type GetAllHandsQueryHookResult = ReturnType<typeof useGetAllHandsQuery>;
export type GetAllHandsLazyQueryHookResult = ReturnType<typeof useGetAllHandsLazyQuery>;
export type GetAllHandsQueryResult = Apollo.QueryResult<GetAllHandsQuery, GetAllHandsQueryVariables>;
export const GetHandByIdDocument = gql`
    query GetHandByID($id: uuid!) {
  hands_by_pk(id: $id) {
    id
    title
    content
    es
    user_id
    created_at
    updated_at
    actions(order_by: {street: asc, order: asc}) {
      id
      hand_id
      position
      move
      size
      order
      street
      created_at
      updated_at
    }
    hands_cards(order_by: {order: asc}) {
      card {
        id
        num
        mark
      }
      order
    }
    pots {
      id
      hand_id
      size
      street
    }
  }
}
    `;

/**
 * __useGetHandByIdQuery__
 *
 * To run a query within a React component, call `useGetHandByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHandByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHandByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHandByIdQuery(baseOptions: Apollo.QueryHookOptions<GetHandByIdQuery, GetHandByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHandByIdQuery, GetHandByIdQueryVariables>(GetHandByIdDocument, options);
      }
export function useGetHandByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHandByIdQuery, GetHandByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHandByIdQuery, GetHandByIdQueryVariables>(GetHandByIdDocument, options);
        }
export type GetHandByIdQueryHookResult = ReturnType<typeof useGetHandByIdQuery>;
export type GetHandByIdLazyQueryHookResult = ReturnType<typeof useGetHandByIdLazyQuery>;
export type GetHandByIdQueryResult = Apollo.QueryResult<GetHandByIdQuery, GetHandByIdQueryVariables>;
export const UpdateHandsDocument = gql`
    mutation UpdateHands($id: uuid!, $handObj: hands_set_input, $potObj: [pots_insert_input!]!, $actionsObj: [actions_insert_input!]!, $handsCardsObj: [hands_cards_insert_input!]!) {
  update_hands_by_pk(pk_columns: {id: $id}, _set: $handObj) {
    id
    title
    es
    content
  }
  delete_pots(where: {hand_id: {_eq: $id}}) {
    affected_rows
  }
  insert_pots(objects: $potObj) {
    affected_rows
  }
  delete_actions(where: {hand_id: {_eq: $id}}) {
    affected_rows
  }
  insert_actions(objects: $actionsObj) {
    affected_rows
  }
  delete_hands_cards(where: {hand_id: {_eq: $id}}) {
    affected_rows
  }
  insert_hands_cards(objects: $handsCardsObj) {
    affected_rows
  }
}
    `;
export type UpdateHandsMutationFn = Apollo.MutationFunction<UpdateHandsMutation, UpdateHandsMutationVariables>;

/**
 * __useUpdateHandsMutation__
 *
 * To run a mutation, you first call `useUpdateHandsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHandsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHandsMutation, { data, loading, error }] = useUpdateHandsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      handObj: // value for 'handObj'
 *      potObj: // value for 'potObj'
 *      actionsObj: // value for 'actionsObj'
 *      handsCardsObj: // value for 'handsCardsObj'
 *   },
 * });
 */
export function useUpdateHandsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHandsMutation, UpdateHandsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHandsMutation, UpdateHandsMutationVariables>(UpdateHandsDocument, options);
      }
export type UpdateHandsMutationHookResult = ReturnType<typeof useUpdateHandsMutation>;
export type UpdateHandsMutationResult = Apollo.MutationResult<UpdateHandsMutation>;
export type UpdateHandsMutationOptions = Apollo.BaseMutationOptions<UpdateHandsMutation, UpdateHandsMutationVariables>;