/*
  # Financial Dashboard Schema

  1. New Tables
    - `financial_metrics`
      - Stores key financial metrics over time
      - Includes revenue, expenses, profit margins
    - `kpi_targets`
      - Stores target values for KPIs
    - `revenue_breakdown`
      - Tracks revenue by category
    - `user_preferences`
      - Stores user dashboard preferences

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Financial Metrics Table
CREATE TABLE IF NOT EXISTS financial_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  revenue decimal NOT NULL DEFAULT 0,
  expenses decimal NOT NULL DEFAULT 0,
  profit_margin decimal NOT NULL DEFAULT 0,
  active_users integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE financial_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own financial metrics"
  ON financial_metrics
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- KPI Targets Table
CREATE TABLE IF NOT EXISTS kpi_targets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,
  target_value decimal NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE kpi_targets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own KPI targets"
  ON kpi_targets
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Revenue Breakdown Table
CREATE TABLE IF NOT EXISTS revenue_breakdown (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  amount decimal NOT NULL DEFAULT 0,
  date date NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE revenue_breakdown ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own revenue breakdown"
  ON revenue_breakdown
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- User Preferences Table
CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  dashboard_layout jsonb NOT NULL DEFAULT '{}',
  theme text NOT NULL DEFAULT 'light',
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) UNIQUE
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own preferences"
  ON user_preferences
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);