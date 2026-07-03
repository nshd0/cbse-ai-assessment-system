-- CBSE AI Assessment System - Database Schema v1.0
-- Tables: schools, classes, teachers, students, curriculum_topics,
--         assessments, questions, student_responses, student_mastery,
--         progress_snapshots, rubric_evaluations

CREATE TABLE schools (
  school_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name VARCHAR(200) NOT NULL,
  board_name VARCHAR(50) DEFAULT 'CBSE',
  academic_year VARCHAR(10),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE classes (
  class_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(school_id),
  class_name VARCHAR(20) NOT NULL,
  section_name VARCHAR(10),
  subject_name VARCHAR(100) DEFAULT 'Artificial Intelligence'
);

CREATE TABLE teachers (
  teacher_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(school_id),
  teacher_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE,
  subject VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE students (
  student_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(school_id),
  class_id UUID REFERENCES classes(class_id),
  admission_no VARCHAR(50) UNIQUE,
  student_name VARCHAR(150) NOT NULL,
  gender VARCHAR(10),
  date_of_birth DATE,
  guardian_name VARCHAR(150),
  guardian_mobile VARCHAR(15),
  student_email VARCHAR(150),
  enrollment_status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE curriculum_topics (
  topic_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  grade INTEGER NOT NULL CHECK (grade BETWEEN 6 AND 10),
  topic_name VARCHAR(200) NOT NULL,
  subtopic_name VARCHAR(200),
  learning_outcome TEXT,
  competency_tag VARCHAR(50),
  assessment_type VARCHAR(30),
  bloom_level VARCHAR(30),
  difficulty_level VARCHAR(20),
  max_marks INTEGER DEFAULT 10,
  sequence_order INTEGER
);

CREATE TABLE assessments (
  assessment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id UUID REFERENCES curriculum_topics(topic_id),
  class_id UUID REFERENCES classes(class_id),
  assessment_title VARCHAR(200) NOT NULL,
  assessment_date DATE,
  assessment_mode VARCHAR(30),
  total_marks INTEGER,
  passing_marks INTEGER,
  created_by UUID REFERENCES teachers(teacher_id),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE questions (
  question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID REFERENCES assessments(assessment_id),
  topic_id UUID REFERENCES curriculum_topics(topic_id),
  question_text TEXT NOT NULL,
  question_type VARCHAR(20),
  option_a TEXT, option_b TEXT, option_c TEXT, option_d TEXT,
  correct_answer TEXT,
  marks INTEGER DEFAULT 1,
  bloom_level VARCHAR(30),
  difficulty VARCHAR(20)
);

CREATE TABLE student_responses (
  response_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID REFERENCES assessments(assessment_id),
  student_id UUID REFERENCES students(student_id),
  question_id UUID REFERENCES questions(question_id),
  response_text TEXT,
  selected_option VARCHAR(5),
  score_obtained DECIMAL(5,2) DEFAULT 0,
  rubric_score DECIMAL(5,2),
  teacher_feedback TEXT,
  mastery_status VARCHAR(20),
  submitted_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE student_mastery (
  mastery_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(student_id),
  topic_id UUID REFERENCES curriculum_topics(topic_id),
  mastery_percent DECIMAL(5,2) DEFAULT 0,
  attempts INTEGER DEFAULT 0,
  last_score DECIMAL(5,2),
  mastery_status VARCHAR(20),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE progress_snapshots (
  snapshot_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(student_id),
  class_id UUID REFERENCES classes(class_id),
  snapshot_date DATE DEFAULT CURRENT_DATE,
  theory_score DECIMAL(5,2),
  practical_score DECIMAL(5,2),
  project_score DECIMAL(5,2),
  overall_grade VARCHAR(5),
  weak_topics TEXT[],
  remarks TEXT
);

CREATE TABLE rubric_evaluations (
  eval_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(student_id),
  assessment_id UUID REFERENCES assessments(assessment_id),
  criterion VARCHAR(100),
  level VARCHAR(30),
  score DECIMAL(5,2),
  teacher_notes TEXT,
  evaluated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_student_class ON students(class_id);
CREATE INDEX idx_mastery_student ON student_mastery(student_id);
CREATE INDEX idx_mastery_topic ON student_mastery(topic_id);
CREATE INDEX idx_responses_student ON student_responses(student_id);
CREATE INDEX idx_snapshots_student ON progress_snapshots(student_id);
CREATE INDEX idx_topics_grade ON curriculum_topics(grade);
