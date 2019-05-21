package micronaut.upload.test;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.multipart.CompletedFileUpload;

@Controller("/deployment")
public class UploadController {

    @Post(value = "create", consumes = MediaType.MULTIPART_FORM_DATA)
    public HttpResponse<String> completed(CompletedFileUpload file) {
        System.out.println("Uploaded" + file.getFilename());
        return HttpResponse.ok("Uploaded");
    }
}