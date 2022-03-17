type CourseServiceProps = {
  name: string;
  duration?: number;
  educator: string;
};

class CreateCourseService {
  execute({ educator, name, duration = 0 }: CourseServiceProps) {
    return {
      educator,
      name,
      duration
    }
  };
};

export default new CreateCourseService();