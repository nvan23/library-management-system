-- Table: public."bookTopics"

-- DROP TABLE public."bookTopics";

CREATE TABLE public."bookTopics"
(
    id uuid NOT NULL,
    topic character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "bookId" uuid,
    "createdById" uuid,
    "updatedById" uuid,
    CONSTRAINT "bookTopics_pkey" PRIMARY KEY (id),
    CONSTRAINT "bookTopics_bookId_fkey" FOREIGN KEY ("bookId")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookTopics_createdById_fkey" FOREIGN KEY ("createdById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookTopics_updatedById_fkey" FOREIGN KEY ("updatedById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."bookTopics"
    OWNER to postgres;