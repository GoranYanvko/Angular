import { HttpClientService } from "./http-client.service";
import { AuthServices } from "./auth.services";
import { BookServices } from "./book.service";
import { UserServices } from "./user/user.services";
import { AdminServices } from "./admin/admin.services";
import { GardServices } from "./gars/gards.services";
import { PostServices } from "./post/post.services";

export const allServices = [
    HttpClientService,
     AuthServices,
      BookServices,
      UserServices,
      AdminServices,
      GardServices,
      PostServices
    ]