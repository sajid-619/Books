class Checks {
    public camps = (
      title: string,
      author: string,
      status: string
    ): boolean => {
      if (
        title == null ||
        author == null ||
        status == null
      ) {
        return true;
      }
      return false;
    };
  }
  
  export interface IChecks {
    camps: (
        title: string,
        author: string,
        status: string
    ) => boolean;
  }
  
  export default Checks;