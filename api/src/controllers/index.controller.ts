import { Handler, Request, Response } from "express";
class IndexController {
  public index: Handler = (req: Request, res: Response): Response => {
    try {
      return res.status(200).json({
        success: true,
        message: "Hello, this is the index of my REST API",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Internal server ERROR, try later",
      });
    }
  };
}

export default IndexController;