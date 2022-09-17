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
  timestamptz: any;
  uuid: string;
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
  size?: Maybe<Scalars['Int']>;
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
  ActionsPkey = 'actions_pkey',
  /** unique or primary key constraint on columns "street", "order" */
  ActionsStreetOrderKey = 'actions_street_order_key'
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
  id: Scalars['uuid'];
  title: Scalars['String'];
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

/** aggregated selection of "hands" */
export type Hands_Aggregate = {
  __typename?: 'hands_aggregate';
  aggregate?: Maybe<Hands_Aggregate_Fields>;
  nodes: Array<Hands>;
};

/** aggregate fields of "hands" */
export type Hands_Aggregate_Fields = {
  __typename?: 'hands_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Hands_Max_Fields>;
  min?: Maybe<Hands_Min_Fields>;
};


/** aggregate fields of "hands" */
export type Hands_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hands_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "hands". All fields are combined with a logical 'AND'. */
export type Hands_Bool_Exp = {
  _and?: InputMaybe<Array<Hands_Bool_Exp>>;
  _not?: InputMaybe<Hands_Bool_Exp>;
  _or?: InputMaybe<Array<Hands_Bool_Exp>>;
  actions?: InputMaybe<Actions_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hands" */
export enum Hands_Constraint {
  /** unique or primary key constraint on columns "id" */
  HandsPkey = 'hands_pkey'
}

/** input type for inserting data into table "hands" */
export type Hands_Insert_Input = {
  actions?: InputMaybe<Actions_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hands_Max_Fields = {
  __typename?: 'hands_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Hands_Min_Fields = {
  __typename?: 'hands_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
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
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
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
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "hands" */
export type Hands_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "hands" */
export enum Hands_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Hands_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hands_Set_Input>;
  where: Hands_Bool_Exp;
};

/** columns and relationships of "labels" */
export type Labels = {
  __typename?: 'labels';
  color?: Maybe<Scalars['String']>;
  content: Scalars['String'];
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

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Labels_Bool_Exp>>;
  _not?: InputMaybe<Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Labels_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
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

/** aggregate min on columns */
export type Labels_Min_Fields = {
  __typename?: 'labels_min_fields';
  color?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  hand_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
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
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>;
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>;
  /** delete data from the table: "hands" */
  delete_hands?: Maybe<Hands_Mutation_Response>;
  /** delete single row from the table: "hands" */
  delete_hands_by_pk?: Maybe<Hands>;
  /** delete data from the table: "labels" */
  delete_labels?: Maybe<Labels_Mutation_Response>;
  /** delete single row from the table: "labels" */
  delete_labels_by_pk?: Maybe<Labels>;
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>;
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>;
  /** insert data into the table: "hands" */
  insert_hands?: Maybe<Hands_Mutation_Response>;
  /** insert a single row into the table: "hands" */
  insert_hands_one?: Maybe<Hands>;
  /** insert data into the table: "labels" */
  insert_labels?: Maybe<Labels_Mutation_Response>;
  /** insert a single row into the table: "labels" */
  insert_labels_one?: Maybe<Labels>;
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>;
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>;
  /** update multiples rows of table: "actions" */
  update_actions_many?: Maybe<Array<Maybe<Actions_Mutation_Response>>>;
  /** update data of the table: "hands" */
  update_hands?: Maybe<Hands_Mutation_Response>;
  /** update single row of the table: "hands" */
  update_hands_by_pk?: Maybe<Hands>;
  /** update multiples rows of table: "hands" */
  update_hands_many?: Maybe<Array<Maybe<Hands_Mutation_Response>>>;
  /** update data of the table: "labels" */
  update_labels?: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk?: Maybe<Labels>;
  /** update multiples rows of table: "labels" */
  update_labels_many?: Maybe<Array<Maybe<Labels_Mutation_Response>>>;
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
export type Mutation_RootDelete_HandsArgs = {
  where: Hands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hands_By_PkArgs = {
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
export type Mutation_RootInsert_HandsArgs = {
  objects: Array<Hands_Insert_Input>;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
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
export type Mutation_RootUpdate_HandsArgs = {
  _set?: InputMaybe<Hands_Set_Input>;
  where: Hands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_By_PkArgs = {
  _set?: InputMaybe<Hands_Set_Input>;
  pk_columns: Hands_Pk_Columns_Input;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  actions: Array<Actions>;
  /** An aggregate relationship */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "hands" */
  hands: Array<Hands>;
  /** fetch aggregated fields from the table: "hands" */
  hands_aggregate: Hands_Aggregate;
  /** fetch data from the table: "hands" using primary key columns */
  hands_by_pk?: Maybe<Hands>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  actions: Array<Actions>;
  /** An aggregate relationship */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table in a streaming manner : "actions" */
  actions_stream: Array<Actions>;
  /** fetch data from the table: "hands" */
  hands: Array<Hands>;
  /** fetch aggregated fields from the table: "hands" */
  hands_aggregate: Hands_Aggregate;
  /** fetch data from the table: "hands" using primary key columns */
  hands_by_pk?: Maybe<Hands>;
  /** fetch data from the table in a streaming manner : "hands" */
  hands_stream: Array<Hands>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table in a streaming manner : "labels" */
  labels_stream: Array<Labels>;
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

export type GetAllHandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHandsQuery = { __typename?: 'query_root', hands: Array<{ __typename?: 'hands', id: any, user_id: string, title: string, content: string, created_at: any, actions: Array<{ __typename?: 'actions', id: any, street: number, position: number, move: string, size?: number | null, order: number }> }> };

export type GetAllHandIDsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHandIDsQuery = { __typename?: 'query_root', hands: Array<{ __typename?: 'hands', id: any }> };

export type GetHandByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetHandByIdQuery = { __typename?: 'query_root', hands_by_pk?: { __typename?: 'hands', id: any, user_id: string, title: string, content: string, created_at: any, actions: Array<{ __typename?: 'actions', id: any, street: number, position: number, move: string, size?: number | null, order: number }> } | null };

export type CreateHandsMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type CreateHandsMutation = { __typename?: 'mutation_root', insert_hands_one?: { __typename?: 'hands', id: any, title: string, content: string, created_at: any, user_id: string } | null };

export type UpdateHandsMutationVariables = Exact<{
  id: Scalars['uuid'];
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdateHandsMutation = { __typename?: 'mutation_root', update_hands_by_pk?: { __typename?: 'hands', id: any, title: string, content: string, user_id: string, created_at: any } | null };

export type DeleteHandsMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteHandsMutation = { __typename?: 'mutation_root', delete_hands_by_pk?: { __typename?: 'hands', id: any, title: string, content: string, user_id: string, created_at: any } | null };


export const GetAllHandsDocument = gql`
    query GetAllHands {
  hands {
    id
    user_id
    title
    content
    created_at
    actions(order_by: {street: asc, order: asc}) {
      id
      street
      position
      move
      size
      order
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
export const GetHandByIdDocument = gql`
    query GetHandByID($id: uuid!) {
  hands_by_pk(id: $id) {
    id
    user_id
    title
    content
    created_at
    actions(order_by: {street: asc, order: asc}) {
      id
      street
      position
      move
      size
      order
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
export const CreateHandsDocument = gql`
    mutation CreateHands($title: String!, $content: String!, $user_id: String!) {
  insert_hands_one(object: {title: $title, content: $content, user_id: $user_id}) {
    id
    title
    content
    created_at
    user_id
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
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      user_id: // value for 'user_id'
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
export const UpdateHandsDocument = gql`
    mutation UpdateHands($id: uuid!, $title: String!, $content: String!) {
  update_hands_by_pk(
    pk_columns: {id: $id}
    _set: {title: $title, content: $content}
  ) {
    id
    title
    content
    user_id
    created_at
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
 *      title: // value for 'title'
 *      content: // value for 'content'
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
export const DeleteHandsDocument = gql`
    mutation DeleteHands($id: uuid!) {
  delete_hands_by_pk(id: $id) {
    id
    title
    content
    user_id
    created_at
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